let carts = document.querySelectorAll('.add-to-cart'); 

let products = [
     {
         name: "The Art of War (Mass Market)", 
         tag: 'Theartofwar', 
         price: 494, 
         inCart: 0
     }, 
     {
        name: 'The Alchemist, Updated Edition (Mass Market)', 
        tag: 'TheAlchemist', 
        price: 350.00, 
        inCart: 0
    },
    {
        name: 'All the Light We Cannot See (Paperback)', 
        tag: 'AlltheLight', 
        price: 1044.00, 
        inCart: 0
    },
    {
        name: 'Dreamland: A Novel, International Edition (Paperback)', 
        tag: 'Dreamland', 
        price: 999.00, 
        inCart: 0
    },
    {
        name: 'We Dream of Space (Paperback)', 
        tag: 'WeDreamofSpace', 
        price: 399.00, 
        inCart: 0
    },
    {
        name: 'Heart of a Samurai  (Paperback)', 
        tag: 'HeartofaSamurai', 
        price: 492.00, 
        inCart: 0
    },
    {
        name: 'The Winter Room  (Paperback)', 
        tag: 'TheWinterRoom', 
        price: 439.00, 
        inCart: 0
    },
    {
        name: 'Apple: Skin to the Core (Hardcover)', 
        tag: 'AppleSkintotheCore', 
        price: 522.00, 
        inCart: 0
    },
    {
        name: 'Nightcrawling:  A Novel (Paperback)', 
        tag: 'NightcrawlingANovel', 
        price: 1026.00, 
        inCart: 0
    }


];   



 

for (let i=0; i < carts.length; i ++) {
      carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products [i])
    }) 
  }

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers'); 

    if(productNumbers) {
        document.querySelector(' .cart-icon span'). textContent = productNumbers; 
    }
}


    function cartNumbers(product) {
  
       
           let productNumbers = localStorage.getItem('cartNumbers'); 
           productNumbers = parseInt(productNumbers); 

           let cartItems = localStorage.getItem('productsInCart');
           cartItems = JSON.parse(cartItems);
       

           if( productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1); 
            document.querySelector(' .cart-icon span'). textContent = productNumbers + 1;   

           }  else{
               
            localStorage.setItem('cartNumbers', 1); 
            document.querySelector(' .cart-icon span'). textContent = 1; 
           }

  setItems(product); 




}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart'); 
    cartItems = JSON.parse(cartItems); 
 


    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
           cartItems = {
               ...cartItems, 
                [product.tag]: product
           }
        }

        cartItems[product.tag].inCart += 1;
       } else {
           product.inCart = 1;
           cartItems = {
           [product.tag]: product
        }
    


    }


    localStorage.setItem("productsInCart" , JSON.stringify
    (cartItems)); 
}



function totalCost(product) {
    //console.log("The product price is", product.price); 
    let cartCost = localStorage.getItem('totalCost'); 

    console.log("My cartCost is", cartCost); 
    console.log(typeof cartCost); 
 
     if(cartCost != null){
         cartCost = parseInt(cartCost); 
          localStorage.setItem("totalCost", cartCost + 
          product.price); 
     } else {     
        
        localStorage.setItem("totalCost", product.price); 

     }
   

}

function displaycart() {
    let cartItems = localStorage.getItem("productsInCart"); 
    cartItems = JSON.parse(cartItems); 
    let productContainer = document.querySelector
    (".products"); 
    let cartCost = localStorage.getItem('totalCost'); 


    //console.log( cartItems); 
   if( cartItems && productContainer ) {
       productContainer.innerHTML = ''; 
       Object.values( cartItems).map( item => {
        productContainer.innerHTML += ` 
       <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span>${item.name}</span>
        </div> 
        <div class="price"> ₱${item.price}.00</div> 
        <div class="quantity">

        <i class="fa-solid fa-plus"></i>
        <span>${item.inCart}</span>
        <i class="fa-solid fa-minus"></i>
       </div>
       <div class="total">
       ₱${item.inCart * item.price}.00
        
       </div><br>


        `; 

       });  

       productContainer.innerHTML += `
          <div class="baskettotalContainer">
             <h4 class="basketTotalTitle">
               Total:

             </h4>
             <h4 class=""basketTotal">
             ₱${cartCost}.00
             </h4>
       `; 
  
     
   }

   deleteButtons(); 

}





onLoadCartNumbers(); 
displaycart(); 


