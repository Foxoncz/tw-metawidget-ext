'use strict'
//utils
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var exec = require('child_process');

//js
var uglify = require('gulp-uglify');

//less
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var comstrip = require('gulp-strip-css-comments');

var dist = 'dist/'

var widgets = {
  meta: {
    in: {
	  folder: 'meta/',
	  img: 'meta/meta.png',
	  idejs: ['meta/meta.ide.js'],
      runtimejs: ['meta/meta.runtime.js'],
	  depjs: ['meta/meta.js'],
      idescss: ['meta/meta.ide.scss'],
      runtimescss: ['meta/meta.runtime.scss']
    },
    out: {
	  folder: './../ui/meta/',
	  idejs: 'meta.ide.js',
      runtimejs: 'meta.runtime.js',
	  depjs: 'meta.js',
      idecss: 'meta.ide.css',
      runtimecss: 'meta.runtime.css'
	}
  }
};

gulp.task('ide:scss', function() {
    return	gulp.src(widgets.meta.in.idescss)
					.pipe(sass())
					.pipe(comstrip({
						preserve: false
					}))
					.pipe(autoprefixer({
						browsers: ['last 5 versions']
					}))
					.pipe(csso())
					.pipe(rename(widgets.meta.out.idecss))
					.pipe(gulp.dest(widgets.meta.out.folder))
});

gulp.task('runtime:scss', function() {
    return	gulp.src(widgets.meta.in.runtimescss)
					.pipe(sass())
					.pipe(comstrip({
						preserve: false
					}))
					.pipe(autoprefixer({
						browsers: ['last 5 versions']
					}))
					.pipe(csso())
					.pipe(rename(widgets.meta.out.runtimecss))
					.pipe(gulp.dest(widgets.meta.out.folder))
});

gulp.task('build:css', ['ide:scss', 'runtime:scss']);

gulp.task('ide:js', function() {
    return gulp.src(widgets.meta.in.idejs)
        .pipe(concat(widgets.meta.out.idejs))
        .pipe(uglify())
        .pipe(gulp.dest(widgets.meta.out.folder));
});

gulp.task('runtime:js', function() {
    return gulp.src(widgets.meta.in.runtimejs)
        .pipe(concat(widgets.meta.out.runtimejs))
        .pipe(uglify())
        .pipe(gulp.dest(widgets.meta.out.folder));
});

gulp.task('dep:js', function() {
    return gulp.src(widgets.meta.in.depjs)
        .pipe(concat(widgets.meta.out.depjs))
        .pipe(uglify())
        .pipe(gulp.dest(widgets.meta.out.folder));
});

gulp.task('build:js', ['ide:js', 'runtime:js', 'dep:js']);

gulp.task('build:img', function() {
    return gulp.src(widgets.meta.in.img)
        .pipe(gulp.dest(widgets.meta.out.folder));
});

gulp.task('build:extension', ['build:js', 'build:css', 'build:img'], function() {
	return exec.exec('ant build -f ./../build-extension.xml', function (err, stdout, stderr) {
				//console.log(stdout);
				console.log(stderr);
			  });
});

gulp.task('default', ['build:js', 'build:css', 'build:img', 'build:extension']);