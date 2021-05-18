let btn = document.querySelectorAll('.button-cart');
let obj = {};
let arr = [];

btn.forEach( (item) =>{
    item.addEventListener('click', function(){
        
      obj.name =  $(this).closest('.one-product').find('.product-title').text();
      obj.price = $(this).closest('.one-product').find('.product-price').text();

      localStorage.setItem('product', arr.push(obj)); 
      
    })
    
})
