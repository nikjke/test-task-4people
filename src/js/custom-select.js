const selectTrigger = document.querySelector(".custom-select__trigger");
const customOptions = document.querySelector(".custom-options");
const hiddenSelect = document.querySelector(".hidden-select");

selectTrigger.addEventListener("click", () => {
  customOptions.classList.toggle("open");
  selectTrigger.classList.toggle("open");
});

document.querySelectorAll(".custom-options__item").forEach((option) => {
  option.addEventListener("click", () => {
    selectTrigger.querySelector("span").textContent = option.textContent;
    hiddenSelect.value = option.getAttribute("data-value");
    customOptions.classList.remove("open");
    selectTrigger.classList.remove("open");
  });
});
