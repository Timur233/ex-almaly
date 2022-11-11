const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('assets')
    .copy('src/fonts', 'assets/fonts')
    .copy('src/img', 'assets/img')
    .js('src/app.js', 'assets/js')
    .minify('assets/js/app.js')
    .vue()
    .sass('src/scss/app.scss', 'css')
    .minify('assets/css/app.css')
    .options({
        processCssUrls: false,
    });
