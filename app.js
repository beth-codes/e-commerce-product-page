//DOM ELEMENTS
const logo = document.querySelector('.logo');
// logo.style.backgroundColor = 'red'
const menu = document.querySelector('.menu');
const cancel = document.querySelectorAll('.cancel');
const cartIcon = document.querySelector('.cart-icon');
const cartNo = document.querySelector('.cart-no');
// cartIcon.style.backgroundColor = 'red'
const navMenu = document.querySelector('.nav-menu');
// cartIcon.style.backgroundColor = 'red'
const cancelIcon = document.querySelector('.cancel-icon');

const profile = document.querySelector('.profile')
const emptyCartDisplay = document.querySelector('.empty-cart-display');
const filledCartDisplay = document.querySelector('.filled-cart-display');
const delIcon = document.querySelector('.delete-icon');
const lightBoxDisplay = document.querySelector('.lightbox-display');
const displayImgContainer = document.querySelector('.display-img');
const displayImg = document.querySelector('.img-mains');
const imgSub = document.querySelector('.img-sub');

// const plusIcon = document.querySelector('.plus');
// const minusIcon = document.querySelector('.minus');
const value = document.querySelector('.value');
const cartBtn = document.querySelector('.cart-btn');
const checkBtn = document.querySelector('.checkout-button');
const prevIcon = document.querySelector('.prev-img');
const nxtIcon = document.querySelector('.nxt-img');
// nxtIcon.style.backgroundColor = 'red'
const navs = document.querySelector('.navs')
// const cancel = document.querySelector('.cancel')

//MENU
menu.addEventListener('click', ()=> {
   let imgCheck = menu.getAttribute('src');

   if (imgCheck === 'images/icon-menu.svg') {
      menu.setAttribute('src', 'images/icon-close.svg')
      navMenu.style.display = 'block'
      menu.style.zIndex = '10000';
      menu.style.padding = '0px 15px'
   } else {
      menu.setAttribute('src', 'images/icon-menu.svg')
      navMenu.style.display = 'none'
      menu.style.padding = '0px 0px'
   }

})

// const cartNo = document.querySelector('.cart-no')
// let numberOfContent = 1;
// cartIcon.addEventListener('click', ()=> {
  
//    // cartIcon.style.backgroundColor = 'red'
//    // numberOfContent = cartNo;
//    if (numberOfContent === '') {
//       emptyCartDisplay.style.display = 'block'
//    } else if(numberOfContent === 1) {
//       console.log('filled')
//       cartNo.style.display = 'block'
//       filledCartDisplay.style.display = 'block'
//    }
// })


//IMG DISPLAY
// displayImg.style.backgroundColor = 'green'

//creating images for display
const images = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];


//looping through images
for (let i = 0; i < images.length; i++) {
   const element = images[i];
   //creating image for each src
   const newImg = document.createElement('img');
   // newDiv.classList.add('overlay')
   newImg.setAttribute('src', element);

   // const newDiv = document.createElement('div');
   // newDiv.classList.add('overlay')
   // imgSub.appendChild(newDiv);

   //creating src for each image
   newImg.setAttribute('onclick', 'clickedImg(this)');
   // newImg.setAttribute('onmouseover', 'clickedImg(this)')
   //appending each image to imgsub
   imgSub.appendChild(newImg);
   // imgSub.appendChild(newDiv);
}

// clicking on each image to be displayed
function clickedImg(e) {
   let imgSrc = e.getAttribute('src');
   console.log(imgSrc)
   displayImg.setAttribute('src', imgSrc);

  
}

//add to card

const btnCount = document.querySelectorAll('.btn-count');
const filledCartContent = document.querySelector('.filled-cart-content');
let priceCalc = document.querySelector('.price-calc');
let productPrice = document.querySelector('.product-price');
// priceCalc.style.backgroundColor = 'green';


let count = 0;
let string = '';

btnCount.forEach(function (btn) {
   
   btn.addEventListener('click', function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("minus")) {
         count--;
         console.log(count)
      } else if (styles.contains("plus")){
         count++;
         console.log(count)
      }else {
         count = 0;
      }
       value.textContent = count;

       if (count === 0) {
         console.log('no cart')
      }

     //add to cart and count display
      cartBtn.addEventListener('click', ()=> {
         if (count > 0) {
            console.log('product added, cartNo element', cartNo)
            //if count is greather than 0 show product count
            cartNo.style.display = 'flex'
            cartNo.textContent = count;
            cartIcon.addEventListener('click', ()=> {
               filledCartDisplay.style.display = 'block';
               // filledCartContent.style.display = 'block';
               priceCalc.textContent = `$${Number(productPrice.textContent)} x ${count} = $${Number(productPrice.textContent) * count}`;
               priceCalc.style.fontWeight = '700';
               priceCalc.style.paddingTop = '8px';
               priceCalc.style.color = 'black';
               console.log(priceCalc);              
            })
           
         } else {
            console.log('product not added')
            //else don't show product count
            cartNo.style.display = 'none'
         }
      })
   });
});

cartIcon.addEventListener('click', ()=> {
   emptyCartDisplay.style.display = 'block';
})

//code for each cancel icon 
for (let i = 0; i < cancel.length; i++) {
   cancel[i].addEventListener('click', ()=> {
      emptyCartDisplay.style.display = 'none';
      filledCartDisplay.style.display = 'none'  
   }) 
}

//code for delete icon
delIcon.addEventListener('click', ()=> {
   if (delIcon) {
    
      // filledCartContent.remove();
      filledCartDisplay.style.display = 'none';
      // filledCartContent.style.display = 'none';
 
      // cartNo.remove();
      cartNo.style.display = 'none';
     
   }
  
})


