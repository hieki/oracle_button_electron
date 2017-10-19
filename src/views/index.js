"use strict";
"";
const addClickEvent = (body, element) => {
  element.addEventListener("click", () => {
    say();
  });
};

const setOra = () => {
  const body = document.getElementsByTagName("body")[0];
  const img = document.createElement("img");
  img.src = "../icons/ora128.png";
  img.setAttribute("style", "position:absolute; bottom:0%; right:0%; position: fixed; z-index: 2147483647; cursor: pointer");
  const element = body.appendChild(img);
  addClickEvent(body, element);
};

const say = () => {
  const audio = new Audio();
  audio.src = `../sounds/kiritan/oracle.wav`;
  audio.play();
};
setOra();
