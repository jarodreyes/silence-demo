const express = require('express');
const http = require('http')
const bodyParser = require('body-parser');
let app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const player = require('play-sound')(opts = {});
const CFonts = require('cfonts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/sms', (req, res) => {
  let body = req.body.Body;
  let note = body[0];
  if ((req.body.From).indexOf("212") >= 0) { note = 'nyc' };
  if ((req.body.From).indexOf("415") >= 0) { note = 'sf' };
  console.log(note);
  CFonts.say(body);
  const twiml = new MessagingResponse();
  player.play(`./public/sound_${note}.wav`);
  twiml.message('A sound was just played by you.');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});