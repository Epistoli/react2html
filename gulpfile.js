var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel');


gulp.task('build', function() {
  return gulp.src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(babel(({
      presets: ['es2015', 'react']
    })))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['build']);
});

gulp.task('default', ['watch']);
