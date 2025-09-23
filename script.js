let backgrounds = ["images/background_graffiti.png", "images/lumi_lobby.png", "berry_lobby.png", ];
let randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;

function setBackground(src) {
  document.body.style.backgroundImage = `url('${src}')`;
}

// random on load
let randomIndex = Math.floor(Math.random() * backgrounds.length);
setBackground(backgrounds[randomIndex]);

// dropdown fill
let bgSelect = document.getElementById("bgSelect");
backgrounds.forEach((bg, i) => {
  let option = document.createElement("option");
  option.value = bg;
  option.textContent = bg.split("/").pop(); // just filename
  if (i === randomIndex) option.selected = true;
  bgSelect.appendChild(option);
});

// change on select
bgSelect.addEventListener("change", e => {
  setBackground(e.target.value);
});

// toggle settings box
let settingsBtn = document.getElementById("settingsBtn");
let settingsBox = document.getElementById("settingsBox");
settingsBtn.addEventListener("click", () => {
  settingsBox.classList.toggle("hidden");
});