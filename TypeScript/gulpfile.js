var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch(['src/**/*.ts'], function(cb) {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
    cb();
  });
});
