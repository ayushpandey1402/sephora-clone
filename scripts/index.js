import {navbar,footer} from "../components/navbar.js";

let x = document.getElementById("myNav");
x.innerHTML = navbar();
console.log(x)

let y = document.getElementById("myfoot");
y.innerHTML = footer();
console.log(y)