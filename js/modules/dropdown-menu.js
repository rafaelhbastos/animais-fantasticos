import outsideClick from './outsideclick.js';

export default function initDropDownMenu(){  
  function handleClick (event){
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  dropDownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  });
};