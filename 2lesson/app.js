// // // // console.log(1)
// // // // console.log(2)
// // // // console.log(3)
// // // // console.log(4)
// // // // console.log(5)
// // // // console.log(6)
// // // // console.log(7)
// // // // console.log(8)

// // // // const btn = document.querySelector("button");

// // // // btn.addEventListener("click", ()=> {
// // // //     handleClick()
// // // // })
// // // // // handleClick()

// // // // const handleClick = () => {
// // // //     console.log("hello")
// // // // }

// // // // // handleClick()

// // // // setTimeout(() => {
// // // //     console.log("async hello")
// // // // }, 0)

// // // // console.log("1")
// // // // console.log("2")
// // // // console.log("3")

// // // // const interval = setInterval(() => {
// // // //     console.log('interval')
// // // // }, 2000)

// // // // // setTimeout(()=>clearInterval(interval), 6000)

// // // // btn.addEventListener("click", ()=>{
// // // //     clearInterval(interval)
// // // // })

// // // // let i = 0;

// // // // btn.addEventListener("click", () => {
// // // //   i++;
// // // //   console.log(i);
// // // //   if (i === 1) {
// // // //     let interval = setInterval(() => {
// // // //       console.log("interval");
// // // //     }, 2000);
// // // //   } else {
// // // //     console.log(interval);
// // // //   }
// // // // });

// // // // const myFunc = (arg) => {
// // // //   console.log(arg);
// // // // };

// // // // myFunc("hello");

// // // // setTimeout();

// // // const doHomework = (subject, callback, callback2, callback3, callback4) => {
// // //   alert(`starting my ${subject} homework`);
// // //   callback();
// // //   callback2();
// // //   callback3();
// // //   callback4();
// // // };

// // // const alertFinished = () => {
// // //   alert("1");
// // // };

// // // const alertFinished2 = () => {
// // //   alert("2");
// // // };

// // // const alertFinished3 = () => {
// // //   alert("3");
// // // };

// // // const alertFinished4 = () => {
// // //   alert("4");
// // // };

// // // doHomework(
// // //   "math",
// // //   alertFinished,
// // //   alertFinished2,
// // //   alertFinished3,
// // //   alertFinished4
// // // );

// // const myFunc = () => {
// //   console.log("1");
// // };

// // setTimeout(myFunc, 1000);

// // const timeout = (callback, time) => {
// //   callback();
// // };

// // const eventlistener = (action, callback) => {};

// // setInterval();

// // const [one, two] = [1, 2];

// // console.log(one);
// // console.log(two);

// const block = document.querySelector(".block");
// const box = document.querySelector(".box");

// let positionX = 0;
// let positionY = 0;

// const move = () => {
//   if (positionX <= 440) {
//     positionX += 16;
//     box.style.left = `${positionX}px`;
//     setTimeout(move, 100);
//   } else if (positionX >= 440 && positionY <= 440) {
//     positionY += 16;
//     box.style.top = `${positionY}px`;
//     setTimeout(move, 100);
//   }
// };

// move();

setTimeout(() => {
  console.log("1");
}, 1000);

setTimeout(() => {
  console.log("2");
}, 1000);
