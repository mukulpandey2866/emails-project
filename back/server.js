const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  
  // Save the email address to a file
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred');
    } else {
      res.send('Email saved successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
