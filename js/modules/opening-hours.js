export default class OpeningHours {
  constructor(opening, activeClass) {
    this.opening = document.querySelector(opening);
    this.activeClass = activeClass;
  }

  openingData() {
    this.weekday = this.opening.dataset.week.split(',').map(Number);
    this.weekHours = this.opening.dataset.hour.split(',').map(Number);
  }

  currentData() {
    this.currenteDate = new Date();
    this.currentDay = this.currenteDate.getDay();
    this.currentHours = this.currenteDate.getUTCHours() - 3;
  }

  isOpen() {
    const openweek = this.weekday.indexOf(this.currentDay) !== -1;
    const openHour = (this.currentHours >= this.weekHours[0] && this.currentHours < this.weekHours[1]);    
    return openweek && openHour;
  }
  
  activeOpening() {
    if (this.isOpen()) {
      this.opening.classList.add(this.activeClass);
    }
  }

  init(){
    if (this.opening){
      this.openingData();
      this.currentData();
      this.activeOpening();
    }
    return this;
  }
}


