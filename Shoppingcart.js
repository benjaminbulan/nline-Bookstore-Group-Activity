var shoppingCart = (function() {
    var cart = []; 

   function item(name, price, count){
    this.name = name
    this.price = price
    this.count= count
   }

  
   function saveCart() {
    localStorage.setItem("ShoppingCart" , JSON.stringify(cart)); 


   }

   function loadCart() {
      cart = JSON.parse(localStorage.getItem("shoppingCart"))
      if (cart===null) {
          cart = []
      }
   }

   loadcart(); 

   // Public Methods and properties 
   var obj = {}; 

   obj.addItemToCart= function (name, price, count) {
     for (var i in cart) {
        if (cart[i].name===name) {
            cart[i].count += count; 
            saveCart();
            return; 
      
        }
     }
     
      console.log("addItemtoCart:", name, price, count); 

      var item = new Item(name , price, count); 
      cart.push(item); 
      saveCart()
    }; 


  ob

})

