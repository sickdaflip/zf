var gulp = require('gulp');
var browser = require('browser-sync');
var requireDir = require('require-dir');
var port = process.env.SERVER_PORT || 3000;

requireDir('./gulp/tasks');

// Builds the documentation and framework files
gulp.task('build', ['sass', 'javascript']);

// Starts a BrowerSync instance
gulp.task('serve', ['build'], function(){
    browser.init({proxy: "https://magento.gastro.lan", port: port});
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*', ['sass', browser.reload]);
    gulp.watch('src/js/**/*', ['javascript', browser.reload]);
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve', 'watch']);