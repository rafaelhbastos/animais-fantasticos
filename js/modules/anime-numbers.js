export default class AnimeNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);;
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  animeNumbers() {
    this.numbers.forEach(number => this.constructor.incrementNumber(number));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animeNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}