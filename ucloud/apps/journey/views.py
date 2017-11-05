from django.shortcuts import render, redirect
from django.views import View

from custom_user.models import EmailUser
from .forms import StoryForm

# Create your views here.
class JourneyView(View):
    def get(self, request, *args, **kwargs):

        user = request.session.get('id')
        user_details = EmailUser.objects.get(pk=user)

        start_storyform = StoryForm()

        context = {
            "user": user_details,
            "storyform": start_storyform,
        }
        return render(request, 'journey.html', context)
