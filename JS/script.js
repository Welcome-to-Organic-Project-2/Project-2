import firebaseInfo from "./firebase.js";

import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

// Initialize Firebase

const database = getDatabase(firebaseInfo)
const dbRef = ref(database, "allProducts");


onValue(dbRef, (data) => {
    const dataArray = data.val();
    
    const ulElement = document.querySelector('.block-wrapper');
    ulElement.innerHTML ='';

    dataArray.forEach( (item) => {
        const newListItem = document.createElement('div');
        newListItem.classList.add('block');
        newListItem.innerHTML = `
        
                    <div class="image">
                            <img src=${item.url} height="" width="" alt="${item.title}">
                        </div>
                        <div class="text">
                            <h5>${item.title}</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div class="price-box">
                            <span>$${item.price}</span>
                        </div>
                        <div class="button">
                            <div class="button-cart"><a href=# class="cart">Add to Cart</a></div>
                        </div>
        `;
        ulElement.append(newListItem);
    });
    
});

const search = document.getElementById('searchbar');
search.addEventListener ("input", () => {

    let input = document.getElementById('searchbar').value;
        input = input.toLowerCase();
        input = input.replace(/\s/g, "");
        
        const productsList = document.getElementsByClassName('block');

   

    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].innerHTML.toLowerCase().includes(input)) {
            productsList[i].style.display = "block";
        }
        else {
            productsList[i].style.display = "none";
        }
    }
});

//     search.forEach ( (searchItem) => {
//     if (searchItem.innerHTML.toLowerCase().includes(input)) {
//     productsList[i].style.display = "block";
// }
//         else {
//         searchItem.style.display = "none";
//     }
//     })
      
        
// click on hamburger menu
// triggers nav bar to expand downwards to show other options

// function classToggle() {

//     const menuItems = document.querySelectorAll('.menu-item');

//     menuItems.forEach(event => event.classList.toggle('nav-bar-toggle-show'));

// }

// document.querySelector('.nav-icon')
//     .addEventListener('click', classToggle);

// const shop = document.querySelector('.shop')

// const koolThing = function (event) {
//     if (event.type = 'mouseleave') {
//         event.target.style.background = 'chartreuse';
//     }
//     if (event.type != 'mouseover') {
//         event.target.style.background = 'none';
//     }
// }

// shop.addEventListener('mouseleave', koolThing);
// shop.addEventListener('mouseover', koolThing);


// // find shop on the document
// // addEventListener on click when you click on shop 
// // find pop-up
// // trigger pop-up
// // addEventListener on 'x'


// const popUp = document.querySelector('.pop-up');

// const close = document.querySelector('.close');

// shop.addEventListener('click', function () {
//     popUp.style.display = 'block'
// })

// close.addEventListener('click', function () {
//     popUp.style.display = 'none';
// })


//         // nav JavaScript was modeled after a tutorial from  FreeCodeCamp and hover CSS styling in the nav bar was modeled from CSS tricks!
//         // understand completely if it's beyond the scope of the assignment but would be open to receiving feedback!
