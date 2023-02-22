'use strict';

const zpCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(zpCli(), 'Hello from zpCli');
console.info('zpCli tests passed');
