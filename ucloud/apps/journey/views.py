from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django_hosts.resolvers import reverse
from django.contrib.auth.models import User
from django.views import View
from .forms import StoryForm

# Create your views here.
class JourneyView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            start_storyform = StoryForm()

            context = {
                "storyform": start_storyform,
                "user": User.objects.get(username='john')
            }
            return render(request, 'journey.html', context)
        else:
            return HttpResponseRedirect('http://www.ucloud.live')
