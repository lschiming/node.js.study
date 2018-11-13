module.exports = function(app) {
  app.get('/form_inc_noticia', function(req, res) {
    res.render('./admin/form_add_noticia');
  });

  app.post('/noticias/salvar', function(req, res) {
    const noticia = req.body;
    res.send(noticia);
  });
}

