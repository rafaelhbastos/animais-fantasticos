import AnimeNumbers from './anime-numbers.js';

export default function fetchAnimals(url, target) {
  const numbersGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');

    div.innerHTML = `<h3>${animal.specie}</h3> <span data-number>${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animeAnimalsNumber() {
    const animeNumbers = new AnimeNumbers('[data-number]', '.numbers', 'active');
    animeNumbers.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach(animal => fillAnimals(animal));
      animeAnimalsNumber();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();

}


