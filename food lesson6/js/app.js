const tabsContent = document.querySelectorAll(".tabcontent");
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");

const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 3) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, idx) => {
      if (target === item) {
        hideTabContent();
        showTabContent(idx);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const opentModalBtn = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

opentModalBtn.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

const forms = document.querySelectorAll("form");

const postData = (url, data) => {
  const request = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
  return request;
};

const bindPostData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // const request = new XMLHttpRequest();
    // request.open("POST", "server.php");
    // request.setRequestHeader("Content-Type", "application/json");

    const formData = new FormData(form);
    const obj = {};

    formData.forEach((item, name) => {
      obj[name] = item;
    });
    console.log(obj);

    const json = JSON.stringify(obj);
    console.log(json);

    postData("server.php", json)
      .then((data) => data)
      .catch((e) => console.error(e))
      .finally(() => console.warn("finally"));

    // request.send(json);
    // console.log(request.status);
  });
};

forms.forEach((item) => {
  bindPostData(item);
});
