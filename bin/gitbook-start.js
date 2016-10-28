#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');
var iaas = require('gitbook-start-iaas-ull-es-aitor-joshua-samuel');
var heroku = require('gitbook-start-heroku-ull-es-aitor-joshua-samuel');

if (argv.n) {
    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d == 'iaas') {

    iaas.initialize();

} else if (argv.d == 'heroku') {

    heroku.initialize();

} else {
    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
