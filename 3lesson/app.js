// // function varTest() {
// //   var x = 1;
// //   console.log(x, "a");
// //   function abc() {
// //     var x = 2;
// //     console.log(x, "b");
// //   }
// //   abc();
// //   console.log(x, "c");
// // }

// // varTest();

// // if (NaN) {
// //   console.log("true");
// // } else {
// //   console.log("false");
// // }

// // console.log(Boolean([].length));

// const letTest = () => {
//   const x = 1;
//   console.log(x, "a");
//   if (true) {
//     const x = 2;
//     console.log(x, "b");
//   }
//   console.log(x, "c");
// };

// letTest();

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     // if (item.classList.contains("red")) {
//     //   item.classList.remove("red");
//     // } else {
//     //   item.classList.add("red");
//     // }
//     item.classList.toggle("red");
//   });
// });

// const btns = document.querySelectorAll("button");

const wrapper = document.querySelector(".wrapper");
const newBtn = document.createElement("button");
newBtn.innerHTML = "7";

wrapper.append(newBtn);

wrapper.addEventListener("click", (event) => {
  console.dir(event.target);
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("red");
  }
  //   console.log("you clicked the button!");
});
