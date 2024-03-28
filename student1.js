/* --- for splash screen, logo, title --- */
let splash = document.querySelector('.splash-screen');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo1');
let mission = document.querySelector('.logo-header');
let missionSpan = document.querySelectorAll('.mission');
let members = document.querySelector('.member-details');
let membersSpan = document.querySelectorAll('.members');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) *400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) *50)
            })
        }, 4500);

        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 4500)

        missionSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) *400)
        });

        setTimeout(() => {
            missionSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) *50)
            })
        }, 4500);

        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 4500)

        membersSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) *400)
        });

        setTimeout(() => {
            membersSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) *50)
            })
        }, 4500);
        
        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 4500)
    })
})

/* --- for shopping page --- */
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bottle',
        image: 'bottle.png',
        price: 60
    },
    {
        id: 2,
        name: 'Catch Me By The Sea Tote Bag',
        image: 'catch.jpg',
        price: 25
    },
    {
        id: 3,
        name: 'Sea Turtle Hoodie',
        image: 'hoodie.png',
        price: 150
    },
    {
        id: 4,
        name: 'Fish Tote Bag',
        image: 'fish.jpg',
        price: 35
    },
    {
        id: 5,
        name: 'Sea Turtle Anatomy Shirt',
        image: 'shirt.png',
        price: 35
    },
];
let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}.00</div>
            <button onclick="addToCard(${key})">Add To Bag</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}.00</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}