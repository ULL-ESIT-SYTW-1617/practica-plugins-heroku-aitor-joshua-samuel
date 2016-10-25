//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var json = require('./package.json');

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('deploy-github', shell.task([
  'git add .',
  'git commit -m "modificando"',
  'git push origin master'
]));
