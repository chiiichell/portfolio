gulp = require "gulp"
sass = require "gulp-sass"
pug = require "gulp-pug"




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
      
exports.deploy = () =>
  gulp.src 'dest/**/*'
      .pipe gulp.dest '../chiiichell.github.io'