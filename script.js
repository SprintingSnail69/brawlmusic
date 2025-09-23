let backgrounds = ["images/background_graffiti.png", "images/lumi_lobby.png", "images/berry_lobby.png", "images/bt21_lobby.png", "images/dark_sands_lobby.png", "images/enchanted_lobby.png", "images/finx_lobby.png", "images/melodie_lobby.png", "images/paintbrawllobby.png", "images/rio_lobby.png", "images/rumble_jungle_lobby.png", "images/sandsoftime_lobby.png", "images/uno_lobby.png"];
let randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
