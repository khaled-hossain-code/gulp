var gulp = require('gulp'),
    args = require('yargs').argv,
    $ = require('gulp-load-plugins')({lazy:true});

gulp.task('js', function(){
    return gulp
        .src([
            './src/**/*.js',
            './*.js'
        ])
        .pipe($.if(args.verbose,$.print()));
})