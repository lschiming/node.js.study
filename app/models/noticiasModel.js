module.exports = function() {
  this.getNoticias = function(conn, ret) {
    conn.query('select * from noticias', ret);
  }

  return this;
}