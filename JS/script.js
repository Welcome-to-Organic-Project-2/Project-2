import firebaseInfo from "./firebase.js";

import {
	getDatabase,
	ref,
	onValue,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Initialize Firebase

const database = getDatabase(firebaseInfo);
const dbRef = ref(database, "allProducts");

onValue(dbRef, (data) => {
	const dataArray = data.val();
	const form = document.getElementById("#filter-form");

	// Initial printing of the products on the website, see below for the function

	printArrayItems(dataArray);

	// submit button event handler

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		updateProducts(dataArray);
		// calling again
	});

	// showAll event handler

	const showAll = document.getElementById("#all");

	showAll.addEventListener("click", (e) => {
		e.preventDefault();

		// Same thing as line 20
		printArrayItems(dataArray);
		document.querySelector(".not-available").style.display="none"
	});
});

const updateProducts = (products) => {
	// function to update the DOM to display the items based on the selected input from the user and clicking the submit button

	const selectedType = document.querySelector('input[name="product-type"]:checked').value;

	const selectedPrice = document.querySelector('input[name="product-price"]:checked').value;

	// Conditional is used to only put the array elements that we need in a new array to be used later.
	const filteredItems = products.filter(
		(product) => selectedType === product.type && selectedPrice === product.priceType,
		document.querySelector(".not-available").style.display="none",
	);
	if (selectedType === "fruit" && selectedPrice === "$$") {
		document.querySelector(".not-available").style.display="block"
	} 
	printArrayItems(filteredItems);
};

// search bar 

const productsList = document.getElementsByClassName("block");

const search = document.getElementById("search-bar");
search.addEventListener("input", () => {
	let input = document.getElementById("search-bar").value;
	input = input.toLowerCase();
	input = input.replace(/\s/g, "");

	for (let i = 0; i < productsList.length; i++) {
		if (productsList[i].innerHTML.toLowerCase().includes(input)) {
			productsList[i].style.display = "block";
			document.querySelector(".not-available").style.display="none"
		} 
		else { (!productsList[i].innerHTML.toLowerCase().includes(input)) 
			productsList[i].style.display ="none";
			document.querySelector(".not-available").style.display="block"
		}
	}
	if (input === "") {
		document.querySelector(".not-available").style.display="none"
	}
});

// Reusable function, used to print the elements of "itemsArr" array on the .block-wrapper element
function printArrayItems(itemsArr) {
	const ulElement = document.querySelector(".block-wrapper");
	ulElement.innerHTML = "";

	itemsArr.forEach((item) => {

		const newListItem = document.createElement("div");
		newListItem.classList.add("block");
		newListItem.innerHTML = `
            
                        <div class="image">
                                <img src=${item.url} height="" width="" alt=${item.title}>
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
}


// import firebaseInfo from "./firebase.js";

// import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

// // Initialize Firebase

// const database = getDatabase(firebaseInfo)
// const dbRef = ref(database, "allProducts");


// onValue(dbRef, (data) => {

//     const dataArray = data.val();
        
//     const ulElement = document.querySelector('.block-wrapper');
//     ulElement.innerHTML ='';

//     dataArray.forEach( (item) => {
//         const newListItem = document.createElement('div');
//         newListItem.classList.add('block');
//         newListItem.innerHTML = `
        
//                     <div class="image">
//                             <img src=${item.url} height="" width="" alt="${item.title}">
//                         </div>
//                         <div class="text">
//                             <h5>${item.title}</h5>
//                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//                             <div class="price-box">
//                             <span>$${item.price}</span>
//                         </div>
//                         <div class="button">
//                             <div class="button-cart"><a href=# class="cart">Add to Cart</a></div>
//                         </div>
//         `;
//         ulElement.append(newListItem);
//     });

// });

// const productsList = document.getElementsByClassName('block');

// const search = document.getElementById('search-bar');
//     search.addEventListener ("input", () => {

//     let input = document.getElementById('search-bar').value;
//         input = input.toLowerCase();
//         input = input.replace(/\s/g, "");

//     for (let i = 0; i < productsList.length; i++) {
//         if (productsList[i].innerHTML.toLowerCase().includes(input)) {
//             productsList[i].style.display = "block";
//         }
//         else {
//             productsList[i].style.display = "none";
//         }
//     }
    
// });




        
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
