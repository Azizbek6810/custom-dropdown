/*=============== DROPDOWN JS ===============*/

const showDropdown = (content, button) => {
  const dropdownContent = document.getElementById(content),
    dropdownButton = document.getElementById(button);

  dropdownButton.addEventListener("click", () => {
    // we add the show-dropdown class, so that the menu is displayed
    dropdownContent.classList.toggle("show-dropdown");
  });
};

showDropdown("dropdown-content", "dropdown-button");

// For each dropdown item

const dropdownItems = document.querySelectorAll(".dropdown__item");
dropdownItems.forEach((item) => {
  const itemId = item.id;
  showDropdown("dropdown-content", itemId);
});
