import gulp from 'gulp';

/*CSS & SASS */
import sass from 'gulp-sass';

import postcss from 'gulp-postcss';
/*postcss plugins:*/
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/** HTML & PUG */
import pug from 'gulp-pug';

/** browser sync */
import server from 'browser-sync';


gulp.task('sass', () => 
    gulp
    .src('./src/scss/styles.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./src/css'))
)

gulp.task('styles', () => 
    gulp
    .src('./src/css/styles.css')
    .pipe(postcss([
        autoprefixer(),
        cssnano()
    ]))
    .pipe(gulp.dest('./public/css'))
)

gulp.task('pug', () => 
    gulp
    .src('./src/pug/index.pug')
    .pipe(pug({
        pretty: false
    }))
    .pipe(gulp.dest('./public'))
)

gulp.task('default', () => {
    server.init({
        server: './public'
    })
    gulp.watch('./src/pug/index.pug', gulp.series('pug')).on('change', server.reload);
    gulp.watch('./src/pug/includes/*.pug', gulp.series('pug')).on('change', server.reload);
    gulp.watch('./src/scss/*.scss', gulp.series('sass')).on('change', server.reload);
    gulp.watch('./src/css/*.css', gulp.series('styles')).on('change', server.reload);
})