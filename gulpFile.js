const chalk = require('chalk'),
      log = console.log,
      error = chalk.bold.red,
      info = chalk.bgBlue;
var gulp = require('gulp'),
    args = require('yargs').argv,
    del = require('del'),
    $ = require('gulp-load-plugins')({lazy:true});

gulp.task('js', function(){
    log(info('JS task starting'));
    return gulp
        .src([
            './src/**/*.js',
            './*.js'
        ])
        .pipe($.if(args.verbose,$.print()));
});

gulp.task('styles',['clean-styles'], function(){
    log(info('Compiling less to css'));
    return gulp
        .src([
            './src/client/styles/*.less'
        ])
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest('./.temp'))
});

gulp.task('clean-styles', function(){
    log(info('Cleaning Temp files'));
    var files = './.temp/*.css';
    del(files);
});

gulp.task('less-watcher', function(){
    gulp.watch('./src/client/styles/*.less',['styles']);
})