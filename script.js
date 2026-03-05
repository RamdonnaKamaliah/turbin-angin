const button = document.getElementById("toggleBtn");
const turbine = document.getElementById("blades");
const windowLight = document.getElementById("light");
const indicator = document.getElementById("indicator");
const statusText = document.getElementById("statusText");

let isOn = false;

button.addEventListener("click", function () {
  isOn = !isOn;

  if (isOn) {
    turbine.classList.add("spin");
    windowLight.classList.add("on");
    indicator.classList.add("active");

    statusText.textContent = "Listrik Aktif";
    button.textContent = "Matikan Turbin";
    button.style.background = "#d33";
  } else {
    turbine.classList.remove("spin");
    windowLight.classList.remove("on");
    indicator.classList.remove("active");

    statusText.textContent = "Listrik Tidak Aktif";
    button.textContent = "Nyalakan Turbin";
    button.style.background = "#2eaf4a";
  }
});
