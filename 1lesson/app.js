// const user = prompt("Tell me ur name!");

// const regExp = /Y/i;

// console.log(user.match(regExp));

// const letter = "ccAaaCBccbbCcc";

// // const regExp = /[Cc]/g;

// const regExp = new RegExp("[Cc]", "g");

// console.log(letter.match(regExp));

// const letter = "01dasdsa234567asdlkajsdAlaksdD8098765asdasd4321asDdasd";

// const regExp = /\w/g;

// console.log(letter.replace(regExp, "*"));

// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector("span");

// const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   console.log(regExp.test(phoneInput.value));
//   if (regExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok";
//     phoneResult.style.color = "red";
//   }
// });

// if (!1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(Boolean(null));

// asdasd@asads.com
// Aaa1 4

// let i = 0;

// const incr = () => {
//   console.log(++i);
//   if (i < 500) {
//     incr();
//   }
// };

// incr();

const peopleObj = {
  Jhon: {
    age: 21,
    parents: {
      Tony: {
        age: 50,
        parents: {
          Alex: {
            age: 75,
          },
        },
      },
      Kelly: {
        age: 40,
      },
    },
  },
  Sam: {
    age: 15,
    parents: {
      Jihn: {
        age: 35,
      },
    },
  },
};

// console.log(peopleObj.Jhon.parents);

const parentList = (obj) => {
  if (obj.parents) {
    for (let key in obj.parents) {
      console.log(key);
      parentList(obj.parents[key]);
    }
  } else {
    console.log("..ops");
  }
};

for (let key in peopleObj) {
  parentList(peopleObj[key]);
}
