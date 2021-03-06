'use strict';

var fs = require('fs');
var gulp = require('gulp');
var Parker = require('parker/lib/Parker');
var prettyJSON = require('prettyjson');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var CONFIG = require('../config.js');

// Compiles Sass files into CSS
gulp.task('sass', ['sass:foundation']);

// Prepare dependencies
gulp.task('sass:deps', function() {
    return gulp.src(CONFIG.SASS_DEPS_FILES)
        .pipe(gulp.dest('_vendor'));
});

// Compiles Foundation Sass
gulp.task('sass:foundation', ['sass:deps'], function() {
    return gulp.src(['src/scss/styles.scss'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            browsers: CONFIG.CSS_COMPATIBILITY
        })]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
        .on('finish', function() {
            gulp.src(CONFIG.SASS_LINT_FILES)
                .pipe(sassLint({
                    config: './.sass-lint.yml'
                }))
                .pipe(sassLint.format());
        });
});