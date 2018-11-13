module.exports = function() {
  this.getNoticias = function(conexao, retorno) {
    conexao.query('select * from noticias', retorno);
  }

  this.getNoticia = function(conexao, retorno) {
    conexao.query('select * from noticias where id_noticia = 2', retorno);
  }

  return this;
}