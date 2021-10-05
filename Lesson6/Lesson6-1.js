function Item(product, description, price, discount=0) {
    this.product = product;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catShop = []

catShop.push(new Item('Bread','', 95, 20));
catShop.push(new Item('Cola', '', 17));
catShop.push(new Item('Marbolo', '',15));
catShop.push(new Item('Ionix', '',32, 10));
catShop.push(new Item('Milk', '',22));
catShop.push(new Item('Ting','',22));

function byProd() {
    catShop.forEach(function (item, i) {
        drowItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drowItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend', 
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="description"><h4>${item.product}</h4>${item.description}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
byProd(catShop);


let shoppingCart = [];



let nullBasket = 'Ваша корзина пуста.';

function basketItem(product, price, discount=0) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price*this.discount/100;
        } else {
            return this.price;
        }
    }
}


function resultlSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}


function correctEnding (){
    let corEnd = '';
    if (shoppingCart.length == 1) {
        corEnd = '';
    } else if (shoppingCart.length > 1 && shoppingCart.length <= 4) {
        corEnd = 'а';
    } else {
        corEnd = 'ов';
    }
    return corEnd;
}


function myCart (shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${nullBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>В корзине: ${shoppingCart.length} 
            товар${correctEnding()} на сумму ${resultlSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
myCart(shoppingCart);


$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catShop[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));

        myCart(shoppingCart);
    } 
});
 

const $work= document.querySelector('#work');

$popup.addEventListener('click', function(e) {
    $popup.style.display = 'none';
});

 $catalog.addEventListener('click', function(e) {
    if( e.target.tagName === 'IMG' ) {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" class="scale">`);
    }
});