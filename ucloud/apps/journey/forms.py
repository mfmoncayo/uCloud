import django
from django import forms
from .models import Story
from django.utils.translation import ugettext_lazy as _

"""
New user form for creating personal Story
"""
class StoryForm(forms.ModelForm):
    class Meta:  # noqa: D101
        model = Story
        fields = ('fname', 'mname', 'lname')
        widget={
            'fname': forms.TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control email1',
                'placeholder':'First Name',
                }),
            'mname': forms.TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control',
                'placeholder':'Middle Name',
                }),
            'lname': forms.TextInput(
                attrs={
                'id':'inputWelcome',
                'class':'form-control password1',
                'placeholder':'Last Name',
                })
        }
