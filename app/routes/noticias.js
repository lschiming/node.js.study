module.exports = function(app) {

  app.get('/noticias', function(req, res) {
    var conn = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticias(conn, function(erro, resultado) {
      res.render('./noticias/noticias', {noticias : resultado});
    });
  });
}
