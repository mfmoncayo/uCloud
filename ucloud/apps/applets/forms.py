import django
import smtplib
from django import forms
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.utils.translation import ugettext_lazy as _

class EmailUserCreationForm(forms.ModelForm):

    """A form for creating new users.

    Includes all the required fields, plus a repeated password.

    """

    error_messages = {
        'duplicate_email': _("A user with that email already exists."),
        'password_mismatch': _("The two password fields didn't match."),
    }

    email = forms.EmailField(
        widget=forms.TextInput(
            attrs={
            'id':'inputWelcome',
            'class':'form-control email2',
            'placeholder':'Email Address',
            }
        )
    )

    password1 = forms.CharField(
        label=_("Password"),
        widget=forms.PasswordInput(
            attrs={
            'id':'inputWelcome',
            'class':'form-control password2',
            'placeholder':'Password',
            }
        )
    )
    password2 = forms.CharField(
        label=_("Password confirmation"),
        widget=forms.PasswordInput(
            attrs={
            'id':'inputWelcome',
            'class':'form-control password3',
            'placeholder':'Re-Enter Password',
            }
        )
    )

    class Meta:  # noqa: D101
        model = get_user_model()
        fields = ('email',)

    def clean_email(self):
        email = self.cleaned_data["email"]
        try:
            get_user_model()._default_manager.get(email=email)
        except get_user_model().DoesNotExist:
            return email
        raise forms.ValidationError(
            self.error_messages['duplicate_email'],
            code='duplicate_email',
        )

    def clean_password2(self):
        """Check that the two password entries match.

        :return str password2: cleaned password2
        :raise forms.ValidationError: password2 != password1

        """
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(
                self.error_messages['password_mismatch'],
                code='password_mismatch',
            )
        return password2

    def save(self, commit=True):
        """Save user.

        Save the provided password in hashed format.

        :return custom_user.models.EmailUser: user

        """
        user = super(EmailUserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
            email = self.cleaned_data["email"]
            subject = "Welcome to the uCloud"
            message = "Your journey on the uCloud is about to begin.."
            from_email = "noreply@ucloud.live"
            send_mail(subject, message, from_email, [email], fail_silently=False)
        return user
