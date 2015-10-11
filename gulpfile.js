var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('html5-lint', function() {
  return gulp.src('./src/*.html')
    .pipe(html5Lint());
});

gulp.task('watch-html', function() {
  gulp.watch('src/*.html', ['html5-lint']);
});

gulp.task('mithril', function() {
  return browserify('./node_modules/mithril/mithril.min.js')
    .bundle()
    .pipe(source('mithril.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('srcToDist', function() {
  gulp.src('./src/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return del(['./dist']);
});

gulp.task('build', ['srcToDist', 'mithril']);

gulp.task('default', function() {
});
