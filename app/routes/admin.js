module.exports = function(app) {
  app.get('/form_inc_noticia', function(req, res) {
    res.render('./admin/form_add_noticia');
  });

  app.post('/noticias/salvar', function(req, res) {
    const conn = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;
    const noticia = req.body;

    noticiasModel.salvarNoticia(noticia, conn, function(erro, resultado) {
      res.redirect('/noticias');
    });
  });
}

