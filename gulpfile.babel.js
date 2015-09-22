import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import jade from 'gulp-jade';
import watchify from 'gulp-watchify';
import babelify from 'babelify';
import shim from 'browserify-shim';
import uglifyify from 'uglifyify';
import buffer from 'vinyl-buffer';
import stylus from 'gulp-stylus';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

const environment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
let isWatching = false;

console.info(`Now environment is ${environment}`);

gulp.task('watch-enable', () => { isWatching = true });

gulp.task('bundle:js', watchify(bundle => {
  return gulp.src('./client/app.es6')
    .pipe(plumber({
      errorHandler(dest) {
        notify.onError({
          title:   'Gulp Error: bundle:js',
          message: '<%= error.message %>',
        })(dest);

        dest.codeFrame && console.log(dest.codeFrame);
        this.emit('end');
      },
    }))
    .pipe(bundle({
      extensions: ['.es6', '.json'],
      transform: [babelify, shim, uglifyify],
      debug: true,
      watch: isWatching,
    }))
    .pipe(buffer())
    .pipe(rename('bundle.js'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/javascripts'));
}));

gulp.task('bundle:js-external', watchify(bundle => {
  return gulp.src('./client/libs/*')
    .pipe(plumber({
      errorHandler(dest) {
        notify.onError({
          title:   'Gulp Error: bundle:js-libs',
          message: '<%= error.message %>',
        })(dest);

        dest.codeFrame && console.log(dest.codeFrame);
        this.emit('end');
      },
    }))
    .pipe(bundle({
      extensions: ['.es6', '.json'],
      transform: [babelify, uglifyify],
      debug: true,
    }))
    .pipe(buffer())
    .pipe(rename({ extname: '.js' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/javascripts'));
}));

gulp.task('bundle:css', () => {
  return gulp.src('./client/app.styl')
    .pipe(plumber({
      errorHandler(dest) {
        notify.onError({
          title:   'Gulp Error: bundle:css',
          message: '<%= error.message %>',
        })(dest);

        this.emit('end');
      },
    }))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(csso())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(rename('bundle.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('generate:html', () => {
  return gulp.src('./client/**/*.jade')
    .pipe(plumber({
      errorHandler(dest) {
        notify.onError({
          title:   'Gulp Error: generate:html',
          message: '<%= error.message %>',
        })(dest);

        this.emit('end');
      },
    }))
    .pipe(jade({
      pretty: true,
      locals: { builtTimestamp: Date.now().toString() },
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public'));
});

gulp.task('bundle', ['bundle:css', 'bundle:js']);
gulp.task('build', ['generate:html', 'bundle:js-libs', 'bundle']);

gulp.task('watch', ['watch-enable', 'bundle', 'generate:html'], function() {
  gulp.watch('./client/**/*.styl', ['bundle:css']);
  gulp.watch('./client/*.jade', ['generate:html']);
});

gulp.task('server', ['watch'], () => {
  const bs = browserSync.create();

  bs.init({
    open: false,
    server: {
      baseDir: './public',
    },
  });

  gulp.watch('./public/*.html', bs.reload);
  gulp.watch('./public/javascripts/*.js', bs.reload);
  gulp.watch('./public/stylesheets/*.css', bs.reload);
});
