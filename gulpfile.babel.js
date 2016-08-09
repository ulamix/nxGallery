import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import babel from 'gulp-babel';

gulp.task('sass', () => {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
const _libName = "broSlide";
gulp.task('concat', () => {
   return gulp.src([
        'src/js/intro.js',
        'src/js/css-classes.js',
        'src/js/skip.js',
        'src/js/_.js',
        'src/js/fullscreen.js',
        'src/js/spin.js',
        'src/js/bez.js',
        'src/js/basevars.js',
        'src/js/utils.js',
        'src/js/animate.js',
        'src/js/touch.js',
        'src/js/moveontouch.js',
        'src/js/wheel.js',
        'src/js/fotorama.js',
        'src/js/fn-fotorama.js',
        'src/js/instances.js',
        'src/js/cache.js',
        'src/js/measures.js',
        'src/js/auto-initialization.js',
        'src/js/outro.js'
   ])
    .pipe(concat(_libName + '.js'))
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'concat']);