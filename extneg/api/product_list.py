import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pickle
from dashboardviews import models


class Products_Api(APIView):
  """
  A custom endpoint for GET request.
  """
  def get(self, request, format=None):
    # instance = models.Images.objects.all()
    # for inst in instance :
    #     inst.delete()  
    # with open("./src/client_order/api/productsStorage.json") as fle:  
    #     dat = json.load(fle)
    #     for m in dat :
    #         Img = models.Images(image1=m["images"]["image1"], image2=m["images"]["image2"], image3=m["images"]["image3"])
    #         Img.save()
    #         productsaving = models.Product(id=m["id"], title=m["title"], price=m["price"], inventory=m["inventory"], category=m["category"], section=m["section"], row=m["row"], link=m["link"], color=m["color"], fabric=m["fabric"], image=m["image"], images=Img, description=m["description"])
    #         productsaving.save()
    Products = models.Product.objects.all()
    data=[]
    for Product in Products :
        data.append({
              'id' : Product.id,
                'title' : Product.title,
                'price' : Product.price,
                'inventory' : Product.inventory,
                'category' : Product.category,
                'section' : Product.section,
                'row' : Product.row,
                'image' : Product.image,
                'link' : Product.link,
                'fabric' : Product.fabric,
                'color' : Product.color,
                'description' : Product.description,
                'images' : 
                    {
                        'image1' : Product.images.image1,
                        'image2' : Product.images.image2,
                        'image3' : Product.images.image3
                    }  
            })
    file = open("./src/client_order/api/products.json","w") 

    json.dump(data, file)

    file.close() 
    return Response(data)