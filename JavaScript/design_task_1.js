// const h1 = document.createElement("h1");
// h1.textContent = "Howdy";
// h1.style.color = "green";
// h1.style.fontFamily = "Arial";
// console.log(h1);
// document.body.appendChild(h1);

// Using only JavaScript ----------------------------- |

const square = document.createElement("div");
// square.textContent = "square";
square.style.height = "20rem";
square.style.width = "20rem";
square.style.backgroundColor = "#6CB3A9";
square.style.position = "absolute";
square.style.top = "50%";
square.style.left = "50%";
square.style.translate = "-50%  -50%";
console.log(square);
document.body.appendChild(square);

const circle = document.createElement("div");
// circle.textContent = "circle";
circle.style.height = "18rem";
circle.style.width = "18rem";
circle.style.backgroundColor = "#F7F3DA";
circle.style.position = "absolute";
circle.style.top = "50%";
circle.style.left = "50%";
circle.style.translate = "-50%  -50%";
circle.style.borderRadius = "50%";
console.log(circle);
document.body.appendChild(circle);

const triangle = document.createElement("div");
// triangle.textContent = "triangle";
triangle.style.height = "12rem";
triangle.style.width = "12rem";
triangle.style.backgroundColor = "#F6DF96";
triangle.style.position = "absolute";
triangle.style.top = "48%";
triangle.style.left = "50%";
triangle.style.translate = "-50%  -50%";
triangle.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
console.log(triangle);
document.body.appendChild(triangle);

// ---------------------------------------------------------------------------------------------------------  |