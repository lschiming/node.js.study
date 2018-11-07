var app = require('./config/server.js');
var status = require('./config/status.js');

app.listen(3000, function(req, res){
  console.log(status());
});