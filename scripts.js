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
  console.log(names);
});

document.querySelector("#uppercase").addEventListener("click", () => {
  // TODO: Make all 'names' ALL CAPS!
  const loudNames = names.map(function(name) {
    name = name.toUpperCase();
    return name;
  });

  console.log(loudNames);
});

document.querySelector("#show-random").addEventListener("click", () => {
  // TODO: Replace the 'textContent' for the 'p' tag with a random name from 'names'.
  // HINT: Use 'getRandomIntInclusive' with a 'max' of 'names.length - 1'.
  document.getElementById("p1").innerHTML =
    names[getRandomIntInclusive(0, names.length - 1)];
});
