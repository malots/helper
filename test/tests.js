import test from 'tape';
import { normalizePath, listFiles, fileExists, readFile, hash, parseJson, isDate, now, createSelectQuery } from '..';

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

test('Should return two files called test.js and tests.json', function(t) {
    const path = './test';
    t.isEquivalent(listFiles(path),['test.json','tests.js']);
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

test('Should parse json file', function(t) {
    const obj = parseJson('./test/test.json');
    t.true(obj.status);
    t.equal(obj.data.keyOne,'valueOne');
    t.equal(obj.data.keyTwo,'valueTwo');
    t.end();
});

test('Return file exists test.json true', function(t) {
    t.true(fileExists('./test/test.json'));
    t.end();
});

test('Return file exists invalid.json false', function(t) {
    t.false(fileExists('./test/invalid.json'));
    t.end();
});

test('Read file content', function(t) {
    const result = readFile('./test/test.json');
    t.true(result.status);
    t.end();
});

test('Return file not found message', function(t) {
    const result = readFile('./test/invalid.json');
    t.false(result.status);
    t.equal(result.message, 'File not found');
    t.end();
});

test('Should confirm the value is date',function(t) {
    const date = '04-06-2018';
    t.true(isDate(date));
    t.end();    
});

test('Should return false of this value is date',function(t) {
    const date = '0&4-06-2018';
    t.false(isDate(date));
    t.end();    
});

test('Should return now date', function(t) {
    const date = now();
    t.true(isDate(date));
    t.end();
});

test('Should return a select query',function(t) {
    const query = createSelectQuery('tableName','col1','col2','col3');
    t.equal(query,'SELECT COL1, COL2, COL3 FROM TABLENAME');
    t.end();    
});






