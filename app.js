const app = require('./config/server.js');
const status = require('./config/status.js');

app.listen(3000, function(req, res){
  console.log(status());
});