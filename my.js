let dishes = [
    new Dish(1,'Spicy seasoned seafood noodles', '$2.29', 20, 'images/image1.jpg', 0),
    new Dish(2,'Salted Pasta with mushroom sauce', '$2.69', 11, 'images/image2.jpg', 0),
    new Dish(3,'Beef dumpling in hot and sour soup', '$2.99', 16, 'images/image3.jpg', 0),
    new Dish(4,'Beef dumpling in hot and sour soup', '$2.99', 16, 'images/image3.jpg', 0),
    new Dish(5,'Beef dumpling in hot and sour soup', '$2.99', 16, 'images/image3.jpg', 0),
    new Dish(6,'Healthy noodle with spinach leaf', '$3.29', 22, 'images/image6-7.jpg', 0),
    new Dish(7,'Healthy noodle with spinach leaf', '$3.49', 13, 'images/image6-7.jpg', 0),
    new Dish(8,'Spicy instant noodle with special omelette', '$3.59', 17, 'images/image8-9-10.jpg', 0),
    new Dish(9,'Spicy instant noodle with special omelette', '$3.59', 17, 'images/image8-9-10.jpg', 0),
    new Dish(10,'Spicy instant noodle with special omelette', '$3.59', 17, 'images/image8-9-10.jpg', 0),


    new Dish(11,'Cold Sesame Cucumber Noodles', '$ 2.59', 17, 'images/image8-9-10.jpg', 1),
    new Dish(12,'AGLIO OLIO ZOODLES WITH SUMMER VEGETABLES AND SHRIMP', '$ 3.29', 20, 'images/cold1.jpg', 1),
    new Dish(13,'Cold sesame cucumber noodles', '$ 2', 11, 'images/cold2.jpg', 1),
    new Dish(14,'CLEAN BROCCOLI SALAD WITH CREAMY ALMOND DRESSING', '$ 3.99', 16, 'images/cold3.jpg', 1),
    new Dish(15,'QUINOA AND SHAVED CARROT SALAD WITH CHICKPEAS, CURRANTS AND CASHEWS', '$ 3.29', 22, 'images/cold4.jpg', 1),
    new Dish(16,'SPIRALIZED SUSHI BOWL WITH SALMON SASHIMI AND GINGER MISO DRESSING', '$ 3.59', 17, 'images/cold5.jpg', 1),

    new Dish(17,'Broccoli Chowder', '$ 3.29', 20, 'images/soup1.jpg', 2),
    new Dish(18,'Country Fish Chowder', '$ 2', 11, 'images/soup2.jpg', 2),
    new Dish(19,'Cream of Chicken Soup', '$ 3.99', 16, 'images/soup3.jpg', 2),
    new Dish(20,'Grandmas Chicken n Dumpling Soup', '$ 3.29', 22, 'images/soup4.jpg', 2),
    new Dish(21,'Weeknight Turkey Tortilla Soup', '$ 3.59', 17, 'images/soup5.jpg', 2),

    new Dish(22,'Grilled Potatoes', '$ 3.29', 20, 'images/gril1.jpg', 3),
    new Dish(23,'Grilled Cabbage Steaks', '$ 2', 11, 'images/gril2.jpg', 3),
    new Dish(24,'Kentucky Grilled Chicken', '$ 3.99', 16, 'images/gril3.jpg', 3),
    new Dish(25,'Sticky Grilled Chicken', '$ 3.29', 22, 'images/gril4.jpg', 3),
    new Dish(30,'The Best Grilled Sirloin Tip Roast', '$ 3.59', 17, 'images/gril5.jpg', 3),

    new Dish(26,'Asian Slaw', '$ 3.29', 20, 'images/sal1.jpg', 4),
    new Dish(27,'Kale Salad with Carrot Ginger Dressing', '$ 2', 11, 'images/sal2.jpg', 4),
    new Dish(28,'Shaved Brussels Sprout Salad', '$ 3.99', 16, 'images/sal3.jpg', 4),
    new Dish(29,'Best Broccoli Salad', '$ 3.29', 22, 'images/sal4.jpg', 4),
    new Dish(31,'Orzo salad', '$ 3.59', '17 Bowls available', 'images/sal5.jpg', 4),

    new Dish(32,'Strawberry-mochi', '$ 3.29', 20, 'images/des1.jpg', 5),
    new Dish(33,'New York Cheesecake', '$ 2', 11, 'images/des2.jpg', 5),
    new Dish(34,'Strawberry tarte tatin', '$ 3.99', 16, 'images/des3.jpg', 5),
    new Dish(35,'Apple-pie', '$ 3.29', 22, 'images/des4.jpg', 5),
    new Dish(36,'Turkey Pahlava', '$ 3.59', 17, 'images/des5.jpg', 5),

];

let dishTypes = ['all','hot', 'cold', 'soup', 'grill', 'salads', 'desserts'];

function Dish(id,name, price, count, photo, dishType) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.photo = photo;
    this.dishType = dishType;
}
const BasketProducts = document.getElementsByClassName('confirm-box')[0];
const mealTable = document.getElementById('mealTable');
const navbarEl = document.getElementsByClassName('navbar-nav')[0]; 
const fixedButton = document.getElementsByClassName('fixed-button')[0];
const modulBg = document.getElementsByClassName('modul-bg')[0];
const arrowBack = document.getElementsByClassName('arrow-back')[0];

function createDishDiv(el) {
    let dish = document.createElement('div');
    dish.className = 'dishes-info col-lg-2 ';

    let image = document.createElement('img');
    image.className = "dishes-info__img";
    image.src = el.photo;

    let name = document.createElement('p');
    name.className = 'dishes-info__mealname';
    name.innerText = el.name;

    let span = document.createElement('span');
    span.className = 'dishes-info__price';
    span.innerText = el.price;

    let dot = document.createElement('span');
    dot.className = 'circle-span';

    let bowl = document.createElement('p');
    bowl.className = 'dishes-info__extra';
    bowl.innerText = el.count + ' Bowls';

    let priceAndBowlsDiv = document.createElement('div');
    priceAndBowlsDiv.className = 'price-bowl-div';
    priceAndBowlsDiv.appendChild(span);
    priceAndBowlsDiv.appendChild(dot);

    priceAndBowlsDiv.appendChild(bowl);

    let addToCart = document.createElement('button');
    addToCart.className = 'add-to-cart';
    addToCart.setAttribute('data-type',el.id);
    addToCart.innerText = 'Add to cart';

    dish.appendChild(image);
    dish.appendChild(name);
    dish.appendChild(addToCart);
    dish.appendChild(priceAndBowlsDiv);    

    mealTable.appendChild(dish);
    return dish ;   
}

function appendMeals() {
    dishes.forEach((el) => {
        let mealDiv = createDishDiv(el);
        mealTable.appendChild(mealDiv);
    }) 
}
appendMeals()

function filterMealsByCat(cat) {
    let result = dishes.filter((el) => {
        return el.dishType == cat;    
    });
    return result; 
}

console.log(filterMealsByCat()) // ['hot', 'cold', 'soup', 'grill', 'salads', 'desserts']
if(navbarEl){
    navbarEl.addEventListener('click', function (event) {
    if (event.target.className == 'nav-link') {
        let selectedCat = (event.target.getAttribute('data-type'));
        let selectedMeals;
        if (selectedCat !== '-1') {
            selectedMeals = filterMealsByCat(selectedCat);
        }else{
            selectedMeals = dishes;
        }
        mealTable.innerHTML = '';
        appendSelectedMeals(selectedMeals);
    }
});
}

// 6-ish ekranni tozalab har filter qilganda usha category dagi ovqatni chiqaradi
function appendSelectedMeals(smeals) { 
    smeals.forEach((el) => {
        let mealDiv = createDishDiv(el);
        mealTable.appendChild(mealDiv);
    });
}

//7-ish search
function searchMeal(searchText){
    resultArr = dishes.filter((el) =>{
        return el.name.toLowerCase().includes(searchText) ;
    });
    return resultArr;
}

// 8- ish   (keyup- klaviaturani bosib har olganizda hodisasi
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', function(){
    let searchedMeals = searchMeal(searchInput.value); 
    mealTable.innerHTML = '';
    appendSelectedMeals(searchedMeals);// ovqatlarni olib usha ovqatlani joylab chiqadi
})


function createCartItemtHtml(el){
    let dishItem = document.createElement('div');
    dishItem.className = 'confirm-items-box';

    let dishInfoDiv = document.createElement('div');
    dishInfoDiv.className = 'info';
    dishItem.appendChild(dishInfoDiv);

    let image = document.createElement('img');
    image.className = "modul-img";
    image.src = el.photo;
    dishInfoDiv.appendChild(image);

    let mealInfo = document.createElement('div');
    mealInfo.className = 'meal-info';
    dishItem.appendChild(mealInfo);

    let mealName = document.createElement('p');
    mealName.className = 'meal-name';
    mealName.innerText = el.name;
    mealInfo.appendChild(mealName);

    let mealPrice = document.createElement('p');
    mealPrice.className = 'meal-price';
    mealPrice.innerText = el.price;
    mealInfo.appendChild(mealPrice);

    let deleteInfo = document.createElement('div');
    deleteInfo.className = 'delete-button';
    deleteInfo.setAttribute = ('data-index', el.id);
    dishItem.appendChild(deleteInfo);

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'icon-delete';
    deleteInfo.appendChild(deleteIcon);

    BasketProducts.appendChild(dishItem);
}


// 9-ish bosilgan kitobni id si buyicha korzinkaga solish

let localdanOlinganJoy = JSON.parse(localStorage.getItem('meningKorzinam'));
let myCart = localdanOlinganJoy ? localdanOlinganJoy: []; 
fixedButton.innerText = myCart.length;
// console.log(myCart)
mealTable.addEventListener('click', function(event){
    if(event.target.className == 'add-to-cart'){
       let idOfCurrentMeal = +event.target.getAttribute('data-type'); 
    //    console.log(idOfCurrentMeal)  //ishlavotti
       addMealToCart(idOfCurrentMeal);
    //    console.log (addMealToCart(idOfCurrentMeal));
    showCartCount()

       event.target.innerText = 'In Cart!';
       fixedButton.innerText = myCart.length;
       console.log(myCart.length)
    }
})

function addMealToCart(id){
    if(!myCart.includes(id)){
        myCart.push(id);
        localStorage.setItem('meningKorzinam', JSON.stringify(myCart));
    }
}

function showCartCount() {
    BasketProducts.innerHTML = '';
    myCart.forEach ((el) => {
        let item = dishes.filter((meal) =>{
            return meal.id == el;
        })
        createCartItemtHtml(item[0]);
        // console.log(createCartItemtHtml(item[0]))
    })
}

BasketProducts.addEventListener('click', function(event){
    if(event.target.className== 'delete-button' || event.target.className == 'icon-delete'){
        let elId = +event.target.getAttribute('data-index');
        let parentDiv = event.target.closest('.confirm-items-box');
        myCart.splice(myCart.indexOf(elId),1); //uje  uchirilvoti
        localStorage.setItem('meningKorzinam',JSON.stringify(myCart));// localdan uchirdi
        BasketProducts.removeChild(parentDiv);
        totalEl.innerText =  '$' + setTotalPrice();
        showCartCount()
    }
})

let totalEl = document.querySelector('.subtotal-price'); 

function setTotalPrice() {
    let totalPrice = 0;
     let myCart = JSON.parse(localStorage.getItem('meningKorzinam'));
    // debugger;
    myCart.forEach((el) =>{
        let item = dishes.filter((dish) => {
            return dish.id == el;
        });
         let nPrice = Number.parseFloat(item[0].price.replace('$', '')); 
        totalPrice +=  nPrice;
        // console.log( nPrice)
    })
    return totalPrice;
}
if(totalEl) {
    totalEl.innerHTML =  '$' + setTotalPrice();
}

showCartCount();

fixedButton.addEventListener('click', function () {
    modulBg.style.display = 'block';
})
arrowBack.addEventListener('click', function () {
    modulBg.style.display = 'none';
})