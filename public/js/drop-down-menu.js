const dropDownMenu = document.getElementById('drop-down-menu');
const menu = document.querySelector('.navbar__menu');

let isSelected = false;

dropDownMenu.addEventListener('click', () => {

    !isSelected ? menu.style.transform = 'translate(0)':
                  menu.style.transform = 'translate(300%)';
    
    isSelected = !isSelected;
})