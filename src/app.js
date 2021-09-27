/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generator").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGenerator();
  });
};

let domainGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".es", ".uk"];
  return (
    randomElement(pronoun) +
    randomElement(adj) +
    randomElement(noun) +
    randomElement(dom)
  );
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
