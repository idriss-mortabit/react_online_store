import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from dashboardviews.models import Customer, Order, Product, Images, Campanycharges, Productcharges


class Products_Api(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):

    data = {
            'id' : Product.id,
            'name' : Product.name,
            'price' : Product.price,
            'inventory' : Product.inventory,
            'categorie' : Product.categorie,
            'section' : Product.section,
            'row' : Product.row,
            'image' : Product.image,
            'description' : Product.description,
            'images' : [
                {
                    'image1' : Product.images.image1,
                    'image2' : Product.images.image2,
                    'image3' : Product.images.image3
                }
            ]
          }
    return Response(data)