from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django_hosts.resolvers import reverse
from django.views import View
from .forms import StoryForm

# Create your views here.
class JourneyView(View):
    def get(self, request, *args, **kwargs):]
        start_storyform = StoryForm()

        context = {
            "storyform": start_storyform,
        }
        return render(request, 'journey.html', context)
