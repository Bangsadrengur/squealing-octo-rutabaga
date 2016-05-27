var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
var del = require('del');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

gulp.task('js-lint', function () {
  return gulp.src(['src/js/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('js', function() {
  return browserify('./src/js/app.js').
    bundle().
    on('error', function (e) {}).
    pipe(source('bundle.js')).
    pipe(gulp.dest('./dist/'));
});

gulp.task('html5-lint', function() {
  return gulp.src('./src/*.html')
    .pipe(html5Lint());
});

gulp.task('watch-src', function() {
  gulp.watch('src/js/*.js', ['js-lint', 'js']);
  gulp.watch('src/css/*.css', ['css-to-dist']);
  gulp.watch('src/css/*.woff', ['fonts-to-dist']);
  gulp.watch('src/*.html', ['html5-lint', 'html-to-dist']);
  gulp.watch('src/images/*', ['images-to-dist']);
  gulp.watch('src/assets/*', ['assets-to-dist']);
});

gulp.task('html-to-dist', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('css-to-dist', function() {
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts-to-dist', function() {
  gulp.src('./src/css/*.woff')
    .pipe(gulp.dest('./dist'));
});

gulp.task('images-to-dist', function() {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets-to-dist', function() {
  gulp.src('./src/assets/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return del(['./dist']);
});

gulp.task('build', [
  'js',
  'html-to-dist',
  'css-to-dist',
  'fonts-to-dist',
  'images-to-dist',
  'assets-to-dist'
]);

gulp.task('watch', ['watch-src']);

gulp.task('default', function() {
});
