module.exports = function(app) {

  app.get('/noticia', function(req, res) {
    var conn = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticia(conn, function(erro, resultado) {
      res.render('./noticias/noticia', {noticia : resultado});
    });
  });
}
