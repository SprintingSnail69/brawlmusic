let backgrounds = ["images/background_graffiti.png", "images/lumi_lobby.png"];
let randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url('images/${backgrounds[randomIndex]}')`;
