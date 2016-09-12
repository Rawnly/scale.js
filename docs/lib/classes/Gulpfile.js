var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var chalk = require('chalk');

gulp.task('default', function () {
  console.log(chalk.green.inverse(' Watching ') + chalk.inverse.bold(' for ') + chalk.inverse.red('changes...'));
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('sass', function () {
  console.log( chalk.yellow.inverse.bold('Sass ') + chalk.inverse('updated') );
  gulp.src('./sass/classes.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('localhost', function () {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
          enable:true,
          path: 'app'
      },
      open: true,
      fallback: 'index.html',
    }));
});


gulp.task('help', function () {
  console.log('');
  console.log('gulp' + ' ' + chalk.green('watch') + '                     ' + chalk.gray('# Watch files.'));
  console.log('');
});
