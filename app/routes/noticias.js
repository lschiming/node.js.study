var dbConn = require('../../config/dbConnection');

module.exports = function(app){

  var conn = dbConn();

  app.get('/noticias', function(req, res){

    conn.query('select * from noticias', function(err,result){
      res.render('./noticias/noticias', {noticias : result});
    });
  });
}
