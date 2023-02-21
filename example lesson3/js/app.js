// const tabsContent = document.querySelectorAll(".tabcontent");
// const tabs = document.querySelectorAll(".tabheader__item");
// const tabsParent = document.querySelector(".tabheader__items");

// const hideTabContent = () => {
//   tabsContent.forEach((item) => {
//     item.style.display = "none";
//   });
//   tabs.forEach((item) => {
//     item.classList.remove("tabheader__item_active");
//   });
// };

// const showTabContent = (i = 3) => {
//   tabsContent[i].style.display = "block";
//   tabs[i].classList.add("tabheader__item_active");
// };

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target.classList.contains("tabheader__item")) {
//     tabs.forEach((item, idx) => {
//       if (target === item) {
//         hideTabContent();
//         showTabContent(idx);
//       }
//     });
//   }
// });

// const modal = document.querySelector(".modal");
// const opentModalBtn = document.querySelector(".btn_white");
// const closeModalBtn = document.querySelector(".modal__close");

// const openModal = () => {
//   modal.classList.add("show");
//   modal.classList.remove("hide");
//   document.body.style.overflow = "hidden";
// };

// opentModalBtn.addEventListener("click", openModal);

// const closeModal = () => {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
//   document.body.style.overflow = "";
// };

// closeModalBtn.addEventListener("click", closeModal);

// const func = ()=>{}



