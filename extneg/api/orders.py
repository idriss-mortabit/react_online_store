import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User


class Username_View(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    img = request.user.profile.Image.name

    data = {
            'username' : request.user.username,
            'address' : request.user.profile.Address,
            'phone' : request.user.profile.Phone,
            'firstname' : request.user.first_name,
            'lastname' : request.user.last_name,
            'email' : request.user.email,
            'image' : img,
            'is_staff' : request.user.is_staff
          }
    return Response(data)

@api_view(['POST'])
def GetUserImage(request):
    data = request.data
    user = User.objects.get(username = request.user.username)
    user.profile.Image.name = data["image"]
    user.save()
    return data["image"]