'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('styles', function(){

gulp.src('./assets/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./assets/css/'))
	.pipe(browserSync.reload({ stream : true }));

});


gulp.task('serve', ['styles'], function(){

browserSync.init({
	server:'./'
});

gulp.watch('./assets/sass/**/*.scss', ['styles']);
gulp.watch('./*html').on('change', browserSync.reload);

});


gulp.task('default', ['serve']);