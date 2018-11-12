const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');

const cssFiles = '_gulp/**/*.?(s)css';

const iconFiles = 'node_modules/govuk-frontend/assets/images/icon*';

gulp.task('css', () => {
    gulp.src(cssFiles)
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('assets'));
});

gulp.task('icons', () => {
    gulp.src(iconFiles).pipe(gulp.dest('assets/images'));
});

gulp.task('watch', () => {
    gulp.watch(cssFiles, ['css']);
});

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['serve',
        '--watch',
        '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('default', ['css', 'icons', 'jekyll', 'watch']);
