var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');

gulp.task('html5-lint', function() {
  return gulp.src('./src/*.html')
    .pipe(html5Lint());
});

gulp.task('watch-html', function() {
  gulp.watch('src/*.html', ['html5-lint']);
});

gulp.task('default', function() {
});
