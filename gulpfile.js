const { src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const dartSass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const path = require("path");
const webp = require('gulp-webp');
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");
const named = require('vinyl-named');
const changed = require('gulp-changed');

const paths = {
    css: {
        src: 'src/scss/**/*.scss',
        dist: 'dist/css'
    },
    js: {
        src: 'src/js/*.js',
        dist: 'dist/js'
    },
    img: {
        src: 'src/images/**/*',
        dist: 'dist/images'
    }
}

const cssSass = () => 
    src(paths.css.src, { sourcemap: false })
        .pipe(plumber())
        .pipe(dartSass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(dest(paths.css.dist));

const jsCompile = () =>
    src(paths.js.src)
        .pipe(plumber())
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(named((file) => {
            return path.parse(file.relative).name;
        }))
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest(paths.js.dist));

const images = () =>
    src(paths.img.src)
        .pipe(changed(paths.img.dist))
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(dest(paths.img.dist));

const imageWebp = () => 
    src(paths.img.src)
        .pipe(changed(paths.img.dist))
        .pipe(webp())
        .pipe(dest(paths.img.dist));

const watchFiles = () => {
    watch(paths.css.src, cssSass)
    watch(paths.js.src, jsCompile)
    watch(paths.img.src, images)
    watch(paths.img.src, imageWebp)
}

exports.default = watchFiles;