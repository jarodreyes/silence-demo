const player = require('play-sound')(opts = {});

function getRandoLetter() {
  var emptyString = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  var randomLetter = getRandomLetter;
  return randomLetter;
}

setInterval(function() {
  var letter = getRandoLetter();
  console.log(letter);
  player.play(`./public/sound_${letter}.wav`);
}, 3300);