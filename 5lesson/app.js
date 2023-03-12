const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

// som.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   const request = new XMLHttpRequest();
//   request.open("GET", "data.json");
//   request.setRequestHeader("Content-Type", "application/json");
//   request.send();
//   request.addEventListener("load", () => {
//     const data = JSON.parse(request.response);
//     console.log(data);
//     usd.value = (e.target.value / data.usd).toFixed(2);
//   });
// });

const convert = (elem, target, isTrue, target2) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
      console.log(data);
      isTrue
        ? (target.value = (elem.value / data.usd).toFixed(2))
        : (target.value = (elem.value * data.usd).toFixed(2));
      elem.value === "" && (target.value = "");

      // && true true/ false false
      // || false true/ true false
    });
  });
};

convert(som, usd, 42);
convert(usd, som);
