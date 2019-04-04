const gulp = require('gulp');
const ts = require('gulp-typescript');
const gutil = require('gulp-util'); // 使log的输出格式与gulp统一
const del = require('del');
const watch = require('gulp-watch');

gulp.task('main', () => {
  const tsResult = gulp.src('demos/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      target: 'ES5',
      // out: 'output.js'
    }))
    .on('error', showError);
  return tsResult.js.pipe(gulp.dest('built'));
});

gulp.task('clean', cb => {
  return del([
    'built/*',
  ], cb);
});

gulp.task('watch', gulp.series(() => {
  return watch('demos/**/*.ts', () => {
    gulp.start('default');
  });
}));

gulp.task('default', gulp.series('clean', 'main'));

function showError(error) {
  gutil.log(gutil.colors.red('ERROR!'), error.message);
  this.emit('end');
}
