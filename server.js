var http = require('http'),
  express = require('express'),
  app = express(),
  server = http.Server(app),
  bodyParser = require('body-parser'),
  mailConfig = require('./emailconfig'),
  nodemailer = require('nodemailer'),
  transporter = nodemailer.createTransport(mailConfig.mailURL),
  emailTo = mailConfig.mailTo.join(', ');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.post('/send-message', function(req, res) {
  var mailOptions = {
    from: 'Cyborg Beast Website <cyborg.beast.server@gmail.com>',
    to: emailTo,
    subject: 'Message from Cyborg Beast Website',
    text: 'FROM: ' + req.body.name + '\nEMAIL: ' + req.body.email + '\n\n' + req.body.content
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.sendStatus(200);
  });
});

app.use(express.static('target'));

server.listen(3000);
console.log('listening on port 3000');
