var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path'); // this module is not installed in this package.json

// write your code here
// serve the this.html page when /this is visited
// serve the that.html page when /that is visited
// DO NOT USE express.static
// app.use() allows you to insert middleware

// app.use(express.static()) a module installed to declare directory name
// appended by the path file name

app.use(express.static(path.join(__dirname, '/client/')));

console.log(path.join(__dirname, '/client'));

app.get('/this', function (req, res) {

  // readFile goes to the file and reads it
  fs.readFile('/this.html', function (err, body) {
    console.log(__dirname + 'this is the dirname');
    if (err) { console.log(err); }
    else { res.end(body); }
  });

  // express method
  // res.sendFile('/client/this.html');

  // res.render('/client/this.html')
});

app.get('/that', function (req, res) {

  // express sendFile shows directory name with concatenated path to file
  console.log(__dirname + "this is the dirname");
  res.sendFile(__dirname + '/client/that.html'); // .sendFile requires the full path for the file

});



app.listen(3000);
