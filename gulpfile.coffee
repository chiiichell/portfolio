gulp = require "gulp"
sass = require "gulp-sass"
pug = require "gulp-pug"
img = require "gulp-image"




exports.sass = () =>
  gulp.src 'src/sass/**/*'
      .pipe sass()
      .pipe gulp.dest 'dest/css'

exports.make = () =>
  gulp.src ['src/**/*.pug', '!src/**/_*.pug']
      .pipe pug(
          pretty:true
          )
      .pipe gulp.dest 'dest'

exports.img = () =>
  gulp.src ['src/img/**/*']
      .pipe img()
      .pipe gulp.dest 'dest/img'

exports.deploy = () =>
  gulp.src 'dest/**/*'
      .pipe gulp.dest '../chiiichell.github.io'