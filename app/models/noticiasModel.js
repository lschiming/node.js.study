module.exports = function() {
  this.getNoticias = function(conexao, retorno) {
    conexao.query('select * from noticias', retorno);
  }

  this.getNoticia = function(conexao, retorno) {
    conexao.query('select * from noticias where id_noticia = 2', retorno);
  }

  this.salvarNoticia = function(noticia, conexao, retorno) {
    conexao.query('insert into noticias set ?', noticia, retorno);
  }

  return this;
}