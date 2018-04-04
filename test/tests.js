import test from 'tape';
import { normalizePath, listFiles, hash } from '../src/helpers';

test('Should return normalized path', function(t) {
    const path = 'path/to/my/test';
    t.equal(normalizePath(path),'/path/to/my/test/');
    t.end();
});

test('Should return empty string with empty path', function(t) {
    const path = '';
    t.equal(normalizePath(path),'');
    t.end();
});

test('Should return normalized path with one word in string', function(t) {
    const path = 'path';
    t.equal(normalizePath(path),'/path/');
    t.end();
});

test('Should return one file called tests.js', function(t) {
    const path = './test';
    t.isEquivalent(listFiles(path),['tests.js']);
    t.end();
});


test('Should return empty array with invalid path', function(t) {
    const path = 'InvalidPath';
    t.isEquivalent(listFiles(path),[]);
    t.end();
});

test('Should hash malots value', function(t) {
    const value = '66dcd743780b8be25d9ac887c0483594979924bb192a6cab388e060126a4e75d29c45cb4f571acb07e81ac9de7b4149cc3302fae7a6642c9e155e176c5c64af8';
    const content = 'malots';
    t.equal(hash(content),value);
    t.end();
});

test('Should return empty with empty value', function(t) {
    const value = '';
    const content = '';
    t.equal(hash(content),value);
    t.end();
});






