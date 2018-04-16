var gulp = require('gulp')
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
babel = require('gulp-babel'),
browserSync = require('browser-sync').create();

gulp.task('previewDocs', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDocsFolder', ['icons'], function() {
  return del("./docs");
});

var pathsToCopy = [
  './app/**/*', 
  '!./app/index.html', 
  '!./app/assets/images/**',
  '!./app/assets/styles/**',
  '!./app/assets/scripts/**',
  '!./app/temp',
  '!./app/temp/**'
  ]

gulp.task('copyGeneralFiles', ['deleteDocsFolder'], function() {
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['copyGeneralFiles'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('ES6toES5', ['optimizeImages'], function() {
  return gulp.src('./app/temp/scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./app/temp/es5'));
});

gulp.task('useminTrigger', ['ES6toES5'], function () {
  gulp.start("usemin");
});

gulp.task('usemin', ['ES6toES5', 'styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDocsFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
