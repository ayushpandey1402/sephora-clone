
//Catching data from localStorage;
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

//catching container
let cartProducts = document.getElementById("cartItemsTable");
let Price;
const displayData = (data) => {
  cartProducts.innerHTML = "";
  data.map((el, index) => {
    console.log(data);
    let {
      brandName,
      displayName,
      image450,
      currentSku: { listPrice: price },
    } = el;

    let row = document.createElement("div");
    row.setAttribute("id", "row");

    // let col1 = document.createElement("d");

    let img = document.createElement("img");
    img.src = image450;
    img.setAttribute("class", "cartImage");

    // col1.append(img);

    let col2 = document.createElement("div");
    col2.setAttribute("id", "secondDiv");

    let innDiv = document.createElement("div");
    let Title = document.createElement("p");
    Title.innerText = displayName;
    Title.setAttribute("id", "cartTitle");
    Title.setAttribute("class", "cartHover");
    let desc = document.createElement("p");
    desc.innerText = brandName;
    desc.setAttribute("class", "cartHover");
    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM ${code}`;
    itemCode.style.color = "#666666";
    itemCode.style.fontSize = "1.3vh";

    innDiv.append(Title, desc, itemCode);
    let div = document.createElement("div");
    div.setAttribute("id", "btnForCart");

    //Select opt for qty
    let select = document.createElement("select");
    select.innerHTML = `<option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>`;
    select.setAttribute("id", "qtyOptions");
    // Adding Change event in select
    select.addEventListener("change", () => {
      updateUnitPrice(select.value, index);
    });
    select.value = el.qty;

    let btnLoves = document.createElement("button");
    btnLoves.innerText = `Move to Loves`;

    btnLoves.addEventListener("click", () => {
      let wishArr = JSON.parse(localStorage.getItem("wish")) || [];
      wishArr.push(el);
      localStorage.setItem("wish", JSON.stringify(wishArr));
    });

    let btnRemove = document.createElement("button");
    btnRemove.innerText = `Remove`;
    btnRemove.addEventListener("click", () => {
      getDelete(index);
    });

    div.append(select, btnLoves, btnRemove);

    //Added col two elements
    col2.append(innDiv, div);

    let col3 = document.createElement("div");
    col3.setAttribute("id", "thirdDiv");

    Price = document.createElement("p");
    let PriceAft = Number(price) * Number(el.qty);
    Price.innerText = `$${PriceAft}`;
    console.log(price);

    col3.append(Price);

    row.append(img, col2, col3);

    cartProducts.append(row);
  });
};
displayData(cartData);

//UnitPriceUpdate
const updateUnitPrice = (value, index) => {
  cartData[index].qty = value;
  cartData[index].qty = value;
  localStorage.setItem("cart", JSON.stringify(cartData));
  showTotal();
  displayData(cartData);
};
let totalAm;
let toalFinal;
const showTotal = () => {
  let total = cartData.reduce((ac, el) => {
    return ac + Number(el.currentSku.listPrice) * el.qty;
  }, 0);
  console.log(total);

  let totalBefore = document.getElementById("totalBefore");
  totalBefore.innerText = `$${total}`;

  totalAm = total;
  toalFinal = document.getElementById("totalFinal");
  toalFinal.innerText = `$${total}`;
};
showTotal();

let promoCount = 0;
document.getElementById("submitCode").addEventListener("click", () => {
  let promoCode = document.getElementById("promoCode").value;
  let priceAfterDis;
  if (promoCount == 0 && promoCode != "") {
    if (promoCode == "masai20") {
      priceAfterDis = totalAm - totalAm * 0.2;
      toalFinal.innerText = `$${priceAfterDis}`;
      alert("Congratulations, you got 20% off on your cart value");
      promoCount++;
    } else if (promoCode == "masai30") {
      priceAfterDis = totalAm - totalAm * 0.3;
      toalFinal.innerText = `$${priceAfterDis}`;
      alert("Congratulations, you got 30% off on your cart value");
      promoCount++;
    } else {
      alert("Promocode does not exist");
    }
  } else if (promoCount > 0) {
    alert("You have alredy applied promocode");
  } else {
    alert("Invalid input");
  }
});
//Delete Func
const getDelete = (index) => {
  cartData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartData));
  displayData(cartData);
  showTotal();
};

document.getElementById("checkout").addEventListener("click", () => {
  let checkoutAmt = document.getElementById("totalFinal");

  localStorage.setItem("checkoutAmt", checkoutAmt.innerText);
  window.location.href = "../payment.html";
});
