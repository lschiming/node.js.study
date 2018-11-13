module.exports = function(app) {

  app.get('/noticias', function(req, res) {
    const conn = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticias(conn, function(erro, resultado) {
      res.render('./noticias/noticias', {noticias : resultado});
    });
  });
}
