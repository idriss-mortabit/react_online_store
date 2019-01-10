from rest_framework.decorators import api_view
from dashboardviews.models import Order
# b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
# b.save()
@api_view(['POST'])
def GetOrder(request):
  data = request.data
  
  return data["image"]