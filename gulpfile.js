const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('default', function () {
  const tsResult = gulp.src('demos/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'output.js'
    }));
  return tsResult.js.pipe(gulp.dest('built'));
});
