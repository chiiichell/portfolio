gulp = require "gulp"
exports.make = () =>
  gulp.src 'src/**/*'
      .pipe gulp.dest 'dest'