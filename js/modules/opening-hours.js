export default function initOpeningHours() {
  const opening = document.querySelector('[data-week]');
  const weekday = opening.dataset.week.split(',').map(Number);
  const weekHours = opening.dataset.hour.split(',').map(Number);

  const currenteDate = new Date();
  const currentDay = currenteDate.getDay();
  const currentHours = currenteDate.getHours();

  const openweek = weekday.indexOf(currentDay) !== -1;

  const openHour = (currentHours >= weekHours[0] && currentHours < weekHours[1]);

  if (openweek && openHour) {
    opening.classList.add('open');
  }
}


