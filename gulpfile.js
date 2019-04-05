const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');

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

gulp.task('lint', () => {
  return gulp.src('demos/**/*.ts')
    .pipe(eslint({
      configFile: './.eslintrc.js'
    })).pipe(eslint.format())
});

gulp.task('clean', cb => {
  return del([
    'built/*',
    '!built/.gitkeep'
  ], cb);
});

gulp.task('watch', gulp.series('clean', 'main', 'lint', () => {
  gulp.watch('demos/**/*.ts', gulp.series('main', 'lint'));
}));

gulp.task('default', gulp.series('clean', 'main'));
