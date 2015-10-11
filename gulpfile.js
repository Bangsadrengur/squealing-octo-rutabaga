var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
var del = require('del');

gulp.task('html5-lint', function() {
  return gulp.src('./src/*.html')
    .pipe(html5Lint());
});

gulp.task('watch-src', function() {
  gulp.watch('src/**/*.js', ['js-to-dist']);
  gulp.watch('src/**/*.html', ['html5-lint', 'html-to-dist']);
});

gulp.task('mithril', function() {
  gulp.src('./node_modules/mithril/mithril.min.js')
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('js-to-dist', function() {
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html-to-dist', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('jquery-to-dist', function() {
  gulp.src('./src/jquery/*.js')
    .pipe(gulp.dest('./dist/jquery'));
});

gulp.task('clean', function() {
  return del(['./dist']);
});

gulp.task('build', [
  'js-to-dist',
  'html-to-dist',
  'jquery-to-dist',
  'mithril'
]);

gulp.task('watch', ['watch-src']);

gulp.task('default', function() {
});
