// console.log('your mom');

var express = require('express');
var bodyParser = require('body-parser');

var users = [
  {
    name: 'jerry seinfeld',
    city: 'new york',
  },
  {
    name: 'neuman',
    city: 'new york',
  }
];

var app = express();
app.use(bodyParser.json()); // end use

app.get('/users', function(req, res, next) {
  res.status(200).json(users);
})

app.post('/users', function(req, res, next) {
  // users.push(req.body);
  // res.status(200).json(users[users.length -1]);
  res.status(200).json(users.push(req.body));
}) // end get

app.delete('users/:id', function(req, res, next) {
  req.params.id;
  var deletedUser = users.pop();
  res.status(200).json(deletedUser);
})

app.listen(3000, function() {
  console.log('listening on port 3000');
}) // end listen
