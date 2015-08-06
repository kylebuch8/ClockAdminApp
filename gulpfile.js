var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: './app'
        }
    });

    gulp.watch('./app/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['server']);
