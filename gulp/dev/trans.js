module.exports = function (gulp, config) {

  require('./trans/stylus')(gulp, config);
  require('./trans/js')(gulp, config);
  require('./trans/mirror')(gulp, config);
  require('./trans/res')(gulp, config);

  gulp.task('trans', ['trans.stylus', 'trans.mirror', 'trans.res', 'trans.stylus']);

};


