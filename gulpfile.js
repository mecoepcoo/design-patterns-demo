const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

gulp.task('main', () => {
  const tsResult = gulp.src('demos/**/*.ts')
    .pipe(changed('built'))
    .pipe(plumber())
    .pipe(ts({
      noImplicitAny: true,
      target: 'ES5',
      // out: 'output.js'
    }))
  return tsResult.js.pipe(gulp.dest('built'));
});

gulp.task('clean', cb => {
  return del([
    'built/*',
  ], cb);
});

gulp.task('watch', gulp.series('clean', 'main', () => {
  gulp.watch('demos/**/*.ts', gulp.series('main'));
}));

gulp.task('default', gulp.series('clean', 'main'));
