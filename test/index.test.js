var assert = require('assert');
var echo = require('../src/index').echo

describe('jscoderetreat', () => {
    it('echo exists', () => {
        assert.ok(echo)
    })
})