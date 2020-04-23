import { doc } from "prettier";

const name = document.querySelector("input");
const names = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  // TODO: 'push' 'name.value' onto 'names'
  names.push(name.value);

});

document.querySelector("#no-long").addEventListener("click", () => {
  // TODO: FILTER out 'names' longer than 5 characters
  // HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
  const shortNames = names.filter(name.length < 6)

});

document.querySelector("#uppercase").addEventListener("click", () => {
  // TODO: Make all 'names' ALL CAPS!
  // HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

  const loudNames = names(name.toUpperCase());
});

document.querySelector("#get-random").addEventListener("click"() => {
  // TODO: Replace the 'textContent' for the 'p' tag with a random name from 'names'.
  // HINT: Use 'getRandomIntInclusive' with a 'max' of 'names.length - 1'.
})
