var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('spec', function () {
    return gulp.src('spec/test.js')
        .pipe(jasmine({
            config: "test/specs/_specs.json"
        }))
});



gulp.task('default', ['spec']);