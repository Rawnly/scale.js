var gulp = require('gulp');
var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var chalk = require('chalk');

gulp.task('default', function () {
  console.log(chalk.green.inverse(' Watching ') + chalk.inverse.bold(' for ') + chalk.inverse.red('changes...'));

  gulp.watch('./coffee/**/*.coffee', ['coffee']);
  gulp.watch('./sass/**/*.scss', ['sass']);


  console.log(chalk.blue.inverse(' Running ') + chalk.bold.blue.inverse(' LOCAL ') + chalk.blue.inverse(' Server '));
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

gulp.task('coffee', function() {
  gulp.src('./coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/js/'));
    console.log( chalk.yellow.inverse.bold('Coffescript ') + chalk.inverse('updated') );
});

gulp.task('sass', function () {
  console.log( chalk.yellow.inverse.bold('Sass ') + chalk.inverse('updated') );
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
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
  console.log('gulp' + ' ' + chalk.green('webserver') + '                 ' + chalk.gray('# Start a server.'));
  console.log('gulp' + ' ' + chalk.green('watch') + '                     ' + chalk.gray('# Watch files.'));
  console.log('');
});

function webserver() {
  console.log(chalk.green.inverse(' Running L O C A L Server '));
}
