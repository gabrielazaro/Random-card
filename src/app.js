/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let numeros = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  let palos = ["\u2666", "\u2665", "\u2660", "\u2663"];

  function numAleatorio() {
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    return numeros[indexNumeros];
  }
  function paloAleatorio() {
    let indexPalos = Math.floor(Math.random() * palos.length);
    return palos[indexPalos];
  }

  const cardNumber = document.querySelector(".number");
  cardNumber.innerHTML = numAleatorio();
  const paloRandom = document.querySelector(".top-icon");
  let paloA = (paloRandom.innerHTML = paloAleatorio());
  const paloB = document.querySelector(".bottom-icon");
  paloB.innerHTML = paloA;
  console.log(paloB);
};
