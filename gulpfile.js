/**
 * Created by ridel1e on 15/08/16.
 */

var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('styles', function () {
  gulp.src('assets/styles/importer.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
});

// watch with reload task

gulp.task('watch', function () {
  gulp.watch('assets/styles/**/*.less', ['styles']);
});

// default task

gulp.task('default', ['styles', 'watch']);