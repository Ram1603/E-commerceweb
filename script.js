// It will connect to login and cart page
function gotologin() {
  window.location.href = './04_login.html';
}
function gotocart() {
  window.location.href = './05_newcart.html';
} 

// It is to set dropdown  menu, when hover on the button it can show the content of the drop down menu.
const womenDropdown = document.getElementById('womenDropdown');
const menDropdown = document.getElementById('mendropdown');
const womenDropdownMenu = document.getElementById('womenDropdownMenu');
const menDropdownMenu = document.getElementById('menDropdownMenu');

const hideDropdownMenu = (dropdownMenu) => {
  dropdownMenu.style.display = 'none';
};

const showDropdownMenu = (dropdown, dropdownMenu) => {
  dropdown.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });

  dropdownMenu.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
  });

  dropdown.addEventListener('mouseout', () => {
    hideDropdownMenu(dropdownMenu);
  });

  dropdownMenu.addEventListener('mouseout', (event) => {
    const isOutside = !dropdown.contains(event.relatedTarget);
    if (isOutside) {
      hideDropdownMenu(dropdownMenu);
    }
  });
};

showDropdownMenu(womenDropdown, womenDropdownMenu);
showDropdownMenu(menDropdown, menDropdownMenu);
