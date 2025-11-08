// const a = 5;
// const b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = 'nicolas';

// console.log("your name is " + myName);

// const daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat"];
// // Get Iten form Array
// console.log(daysOfWeek[4]);
// // Add to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek)

// //object
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name)
// player.lastName = "potato";
// console.log(player)

// //function
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + "and I'm " + age + " years old");
// }

// sayHello("a", 10);
// sayHello("b", 23);
// sayHello("c", 21);

// // conditional
// const age = parseInt(prompt("How old are you?"))

// if (isNaN(age)) {
//     console.log("Please write a number")
// } else if (age < 18) {
//     console.log("You are too young")
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink")
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise")
// }

// const title = document.getElementById("title");

// console.dir(title)

// title.innerText = "Got you!"

// console.log(title.className)

// const h1 = document.querySelector(".hello h1");
// // console.dir(title)
// title.innerText = "Click me!"

// title.style.color = "blue"

// function handleTitleClick() {
//     const currentColor = h1.style.color
//     let newColor;
//     if(currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue"
//     }

//     h1.style.color = newColor
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert('copier!');
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL GOOD");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//     // const clickedClass = "clicked"
//     // if (h1.classList.contains(clickedClass)) {
//     //     h1.classList.remove(clickedClass);
//     // } else {
//     //     h1.classList.add(clickedClass);
//     // }

//     h1.classList.toggle("clicked")
// }

// h1.addEventListener("click", handleTitleClick);

/*
Start buidling an app form here (Chapter 4.0 ~)
 */

const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick() {
  const username = loginInput.value;
  console.log(username);

  // if (username === "") {
  //     alert("Please write your name");
  // } else if (username.length > 15) {
  //     alert("Your name is too long");
  // }
}

loginButton.addEventListener("click", onLoginButtonClick);
