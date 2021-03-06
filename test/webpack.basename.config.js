const path = require('path');

const WebpackEntriesGlobber = require('..');

module.exports = {
    entry: WebpackEntriesGlobber.getEntries(
        // Globs
        [
            path.resolve(__dirname, 'src/**/*.js')
        ],

        // Glob options
        {},

        // Plugin options
        {
            basename_as_entry_name: true
        }
    ),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new WebpackEntriesGlobber
    ]
};
