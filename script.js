let backgrounds = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
let randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url('images/${backgrounds[randomIndex]}')`;
