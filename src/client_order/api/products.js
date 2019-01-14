import request from 'superagent'
const Loadproducts = () => {
    console.log("onload...")
    var file
        request
            .get('/api/get/products')
            .query({ query: 'Manny' })
            .query({ range: '1..5' })
            .query({ order: 'desc' })
            .set('API-Key', 'foobar')
            .set('Accept', 'application/json')
            .end((err, resp) => {
            if (!err) {
                console.log("success")
                file =  resp.text
                console.log(file)
                return file;
            } 
            else {
                console.log("failed")
                console.log(err)
                console.log("end")
                return err
            }
            })
            return file
   /* var xhr;
    xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.myjson.com/bins/f0bns",  true);
    console.log(xhr.status)
    console.log("loading..")
    xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        console.log("loading the data.....")
        if (xhr.status === 200) {
            var file
            file = JSON.parse(xhr.responseText);
            var fs = require('fs');
            fs.writeFile("products.json", file, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("loading done ...")
            console.log(file)
            return file;
            }
        }*/
       /* var file = [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "product_7.png","section":"new_arrivial","row": 1,"description":"product 7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_7.png", "image2":"product_4.png", "image3":"product_7.png"},"link":"/products/product_9","category":"men","fabric":"cotton","color":"black"},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "product_4.png","section":"new_arrivial","row":1,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_4.png", "image2":"product_7.png", "image3":"product_4.png"},"link":"/products/product_1","category":"women","fabric":"silk","color":"pink"},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "product_5.png", "section":"new_arrivial","row":1,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_5.png", "image2":"product_4.png", "image3":"product_5.png"},"link":"/products/product_2","category":"men","fabric":"cotton","color":"red"},
            {"id": 4, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "product_6.png", "section":"new_arrivial","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_6.png", "image2":"product_5.png", "image3":"product_6.png"},"link":"/products/product_3","category":"women","fabric":"silk","color":"red"},
            {"id": 5, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "product_3.png", "section":"new_arrivial","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_3.png", "image2":"product_7.png", "image3":"product_3.png"},"link":"/products/product_4","category":"women","fabric":"cotton","color":"black"},
            {"id": 6, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "product_2.png", "section":"new_arrivial","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_2.png", "image2":"product_3.png", "image3":"product_2.png"},"link":"/products/product_5","category":"men","fabric":"silk","color":"red"},
            {"id": 7, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "product_1.png", "section":"best_seller","row":1,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_1.png", "image2":"product_2.png", "image3":"product_1.png"},"link":"/products/product_6","category":"men","fabric":"silk","color":"black"},
            {"id": 8, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "product_8.png", "section":"best_seller","row":1,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_8.png", "image2":"product_9.png", "image3":"product_8.png"},"link":"/products/product_7","category":"women","fabric":"cotton","color":"red"},
            {"id": 9, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "product_9.png", "section":"best_seller","row":1,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_9.png", "image2":"product_5.png", "image3":"product_9.png"},"link":"/products/product_8","category":"men","fabric":"silk","color":"black"},
            {"id": 10, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "product_6.png", "section":"best_seller","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_6.png", "image2":"product_5.png", "image3":"product_6.png"},"link":"/products/product_3","category":"women","fabric":"cotton","color":"red"},
            {"id": 11, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "product_3.png", "section":"best_seller","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_3.png", "image2":"product_7.png", "image3":"product_3.png"},"link":"/products/product_4","category":"men","fabric":"silk","color":"black"},
            {"id": 12, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "product_2.png", "section":"best_seller","row":2,"description":"7productproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproductproduct", "images":{"image1":"product_2.png", "image2":"product_3.png", "image3":"product_2.png"},"link":"/products/product_5","category":"men","fabric":"cotton","color":"red"}
          ]*/
    }
   
export default Loadproducts