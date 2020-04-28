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
