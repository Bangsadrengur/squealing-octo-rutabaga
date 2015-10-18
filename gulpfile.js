var gulp = require('gulp');
var html5Lint = require('gulp-html5-lint');
var del = require('del');
var eslint = require('gulp-eslint');

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

gulp.task('html5-lint', function() {
  return gulp.src('./src/*.html')
    .pipe(html5Lint());
});

gulp.task('watch-src', function() {
  gulp.watch('src/js/*.js', ['js-lint', 'js-to-dist']);
  gulp.watch('src/css/*', ['css-to-dist']);
  gulp.watch('src/*.html', ['html5-lint', 'html-to-dist']);
  gulp.watch('src/images/*', ['images-to-dist']);
  gulp.watch('src/assets/*', ['assets-to-dist']);
});

gulp.task('mithril', function() {
  var mithrilPath = './node_modules/mithril';
  gulp.src([
    mithrilPath + '/mithril.min.js',
    mithrilPath + '/mithril.min.js.map',
    mithrilPath + '/mithril.js'
    ])
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

gulp.task('css-to-dist', function() {
  gulp.src('./src/css/*')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('images-to-dist', function() {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('assets-to-dist', function() {
  gulp.src('./src/assets/*')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function() {
  return del(['./dist']);
});

gulp.task('build', [
  'js-to-dist',
  'html-to-dist',
  'jquery-to-dist',
  'css-to-dist',
  'images-to-dist',
  'assets-to-dist',
  'mithril'
]);

gulp.task('watch', ['watch-src']);

gulp.task('default', function() {
});
