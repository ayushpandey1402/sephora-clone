let show_item = JSON.parse(localStorage.getItem('showProducts'));
console.log(show_item)

let tag = document.getElementById("heading");
let price = document.getElementById("price");
let img = document.createElement("img");
let cover = document.getElementById("img-cover");
let listPrice = document.getElementById("listPrice");

show_item.forEach(function (item) {
  tag.textContent = item.name;
  price.textContent = `US$ ${item.price}`;
  img.src = item.image;
  cover.append(img);
  listPrice.textContent = `US$ ${item.price * 1.2}`;
  img.setAttribute("id", "itemImg");
});

function addToCartNew(){
  window.location.href = "cart.html";
}
let btn = document.getElementById("add");

if (localStorage.getItem("cart_items") === null) {
  localStorage.setItem("cart_items", JSON.stringify([]));
}
if(localStorage.getItem("flagforlogin") == null) {
  localStorage.setItem("flagforlogin",JSON.stringify([false]));
}
let flag_login = JSON.parse(localStorage.getItem("flagforlogin"));
console.log(flag_login);
btn.onclick = function () {
let cart = JSON.parse(localStorage.getItem("cart_items"));
if(flag_login[0] === true) {
  cart.push(show_item[0]);
  alert("Product is added to cart, go to the cart for further checkout");
  // document.getElementById("cart_btn").style.background = "linear-gradient(to bottom right, #66CA59,#45D27D)";
}
else {
  window.location.href = "./sign_in.html";
}
localStorage.setItem("cart_items", JSON.stringify(cart));
};

var slide_items = [
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1564594326930-17381130fd2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1556217256-dcd735bb8711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1475179377649-672d1c1c75ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmwlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://d1flfk77wl2xk4.cloudfront.net/Assets/11/975/M_p0072197511.jpg",
  "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/categories/14129.jpg",
  "https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/21wk39/l_pa_endofseason_b.jpg",
];

var counter = 0;

var content = document.getElementById("slidePart");

function showSlideshow() {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = slide_items[counter];
  div.append(img);
  div.setAttribute("class", "div");
  img.setAttribute("class", "pic");
  content.append(div);

  counter++;

  let show = setInterval(function () {
    content.innerHTML = null;

    if (counter == slide_items.length) {
      counter = 0;
    }

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = slide_items[counter];
    div.append(img);
    div.setAttribute("class", "div");
    img.setAttribute("class", "pic");
    content.append(div);

    counter++;
  }, 2000);
}

showSlideshow();
