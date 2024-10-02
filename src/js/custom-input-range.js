const rangeInput = document.getElementById("volume");
const volumePercentage = document.querySelector(".form__volume-percentage");

const updateVolume = () => {
  volumePercentage.textContent = `${rangeInput.value}%`;
};

rangeInput.addEventListener("input", updateVolume);
updateVolume();
