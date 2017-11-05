# -*- coding: utf-8 -*-
from django.contrib.auth import login, authenticate, logout
from django.shortcuts import render, redirect
from subdomains.utils import reverse
from django.views import View

from custom_user.forms import EmailUserCreationForm, LoginUserForm, ResetPasswordForm

class HomeView(View):
    def get(self, request, *args, **kwargs):
        start_loginform = LoginUserForm()
        start_registerform = EmailUserCreationForm()
        start_forgotform = ResetPasswordForm()

        context = {
            "loginform": start_loginform,
            "registerform": start_registerform,
            "forgotform": start_forgotform,
        }

        return render(request, 'index.html', context)

    def post(self, request, *args, **kwargs):

        if 'login' in request.POST:

            loginform = LoginUserForm(request.POST)
            registerform = EmailUserCreationForm()
            forgotform = ResetPasswordForm()

            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)

            if user is not None:
                login(request, user)
                request.session['id'] = user.id
                journey = reverse('j', subdomain='j')
                return redirect(journey)

            context = {
                "loginform": loginform,
                "registerform": registerform,
                "forgotform": forgotform
            }

            return render(request, 'index.html', context)

        if 'registration' in request.POST:

            loginform = LoginUserForm()
            registerform = EmailUserCreationForm(request.POST)
            forgotform = ResetPasswordForm()

            if registerform.is_valid():
                registerform.save()

                journey = reverse('j', host='j')
                return render(request, 'journey.html', {'j': journey})

            context = {
                "loginform": loginform,
                "registerform": registerform,
                "forgotform": forgotform
            }

            return render(request, 'index.html', context)

        if 'forgot' in request.POST:
            loginform = LoginUserForm()
            registerform = EmailUserCreationForm()
            forgotform = ResetPasswordForm(request.POST)

            if forgotform.is_valid():
                return redirect('index.html')

            context = {
                "loginform": loginform,
                "registerform": registerform,
                "forgotform": forgotform
            }

            return render(request, 'index.html', context)
