const elixir = require('laravel-elixir');

const BrowserSync = require('laravel-elixir-browsersync');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

    mix.browserSync({
        proxy: '192.168.33.13'
    });

    mix.sass('app.scss')
       .webpack('app.js');
});
