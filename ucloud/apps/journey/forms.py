import django
from django.forms import ModelForm, TextInput
from .models import Story
from django.utils.translation import ugettext_lazy as _

"""
New user form for creating personal Story
"""
class StoryForm(ModelForm):

    class Meta:  # noqa: D101
        model = Story
        fields = ('fname', 'mname', 'lname')
        labels = {
            'fname': _(''),
            'mname': _(''),
            'lname': _(''),
        }
        widgets = {
            'fname': TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control transparent inputFocused inputRadiusFix',
                'placeholder':'First Name',
                }
            ),
            'mname': TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control transparent inputFocused inputRadiusFix2',
                'placeholder':'Middle Name',
                }
            ),
            'lname': TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control transparent inputFocused inputRadiusFix3',
                'placeholder':'Last Name',
                }
            ),
        }
