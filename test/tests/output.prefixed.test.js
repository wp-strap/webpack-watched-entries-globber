const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('Output', () => {
    it('Camelcase folder #1 needs to be prefixed', () => {
        assert.equal(fs.existsSync(path.resolve(__dirname, '../dist/prefixed-folder/folder-with-long-name/file-with-long-name.js')), true);
    });
    it('Camelcase folder #2 needs to be prefixed', () => {
        assert.equal(fs.existsSync(path.resolve(__dirname, '../dist/prefixed-folder/folder-with-long-name/sub-folder/another-file-with-camel-case.js')), true);
    });
    it('First file needs to be prefixed', () => {
        assert.equal(fs.existsSync(path.resolve(__dirname, '../dist/prefixed-folder/first.js')), true);
    });
    it('The second output file needs to be prefixed', () => {
        assert.equal(fs.existsSync(path.resolve(__dirname, '../dist/prefixed-folder/second/second.js')), true);
    });
    it('The third output file needs to be prefixed', () => {
        assert.equal(fs.existsSync(path.resolve(__dirname, '../dist/prefixed-folder/third/third/third.js')), true);
    });
});
