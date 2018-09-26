var app = require('./config/server.js');
var status = require('./config/status.js');

var home = require('./app/routes/home')(app);
var noticias = require('./app/routes/noticias')(app);
var incluir = require('./app/routes/form_inc_noticia')(app);

app.listen(3000, function(req, res){
  console.log(status());
});