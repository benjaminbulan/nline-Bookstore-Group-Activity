let carts = document.querySelectorAll('.add-to-cart'); 

let products = [
     {
         name: 'Book1', 
         tag: 'Theartofwar', 
         price: 494, 
         inCart: 0
     }, 
     {
        name: 'Book2', 
        tag: 'TheAlchemist', 
        price: 350.00, 
        inCart: 0
    },
    {
        name: 'Book3', 
        tag: 'AlltheLight', 
        price: 1044.00, 
        inCart: 0
    },
    {
        name: 'Book4', 
        tag: 'Dreamland', 
        price: 999.00, 
        inCart: 0
    },
    {
        name: 'Book5', 
        tag: 'WeDreamofSpace', 
        price: 399.00, 
        inCart: 0
    },
    {
        name: 'Book6', 
        tag: 'HeartofaSamurai', 
        price: 492.00, 
        inCart: 0
    },
    {
        name: 'Book7', 
        tag: 'TheWinterRoom', 
        price: 439.00, 
        inCart: 0
    },
    {
        name: 'Book8', 
        tag: 'AppleSkintotheCore', 
        price: 522.00, 
        inCart: 0
    },
    {
        name: 'Book9', 
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


    function cartNumbers( product) {
  
       
           let productNumbers = localStorage.getItem('cartNumbers'); 
    
           productNumbers = parseInt(productNumbers); 

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
         
         
        if( cartItems[product.tag] == undefined ) {
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

onLoadCartNumbers(); 


