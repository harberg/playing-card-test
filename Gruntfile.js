module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],

        copy: {
            all: {
                expand: true,
                cwd: 'public',
                src: ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
                dest: 'dist/',
                flatten: true,
                filter: 'isFile'
            },
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
        },
        express: {
            options: {

            },
            dev: {
                options: {
                    script: 'server.js'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'server.js'
                }
            }
        },
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 5000,
                ignoreLeaks: false
            },
            all: { src: ['test/unit/**/*.js'] }
        },

    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('server', ['express:dev']);
    grunt.registerTask('test', ['express:dev', 'simplemocha']);


};