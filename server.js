const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));
const port = process.env.PORT || 3000;
app.listen(port, function(req, res) {
  console.log("Started Server at " + port);
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})
