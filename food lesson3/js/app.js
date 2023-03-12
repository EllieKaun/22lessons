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
      .then((response) => console.log(response))
      .catch((e) => console.error(e))
      .finally(() => console.warn("finally"));

    // request.send(json);
    // console.log(request.status);
  });
};

forms.forEach((item) => {
  bindPostData(item);
});

class Menu {
  constructor(img, alt, title, descr, price) {
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
  }

  render() {
    const wrapper = document.querySelector("#cardWrapper");
    const elem = document.querySelector("div");

    elem.innerHTML = `
    <div class="menu__item">
				<img src="${this.img}" alt="${this.alt}">
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}
				</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> сом/день</div>
				</div>
		</div>`;

    // console.log(wrapper);
    wrapper.append(elem);
  }
}

const getMenu = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

getMenu("db.json").then((data) => {
  data.menu.forEach(({ img, alt, title, descr, price }) => {
    new Menu(img, alt, title, descr, price).render();
  });
});

const deadline = "2023-5-20";

const getTime = () => {
  const t = new Date(deadline) - new Date();
  days = Math.floor(t / (1000 * 60 * 60 * 24));
  hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  minutes = Math.floor((t / (1000 * 60)) % 60);
  seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const setClock = (element, deadline) => {
  const elem = document.querySelector(element);
  const days = elem.querySelector("#days");
  const hours = elem.querySelector("#hours");
  const minutes = elem.querySelector("#minutes");
  const seconds = elem.querySelector("#seconds");

  const updateClock = () => {
    const t = getTime(deadline);
    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = t.seconds;
  };

  setInterval(updateClock, 1000);
};

setClock(".timer", deadline);
