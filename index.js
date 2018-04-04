'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _jsSha = require('js-sha512');

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// - Função utilizada para criptografar senhas
function hash(value) {
    return value.trim() != '' ? (0, _jsSha2.default)((0, _md2.default)(value.trim())) : '';
}

exports.default = hash;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listFiles = undefined;

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// - Função para listar os arquivos de um diretório
function listFiles(path) {
    var files = [];
    try {
        _fs2.default.readdirSync(path).forEach(function (file) {
            files.push(file);
        });
    } catch (err) {
        _console2.default.log(err);
    }
    return files;
}

exports.listFiles = listFiles;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = exports.listFiles = exports.normalizePath = undefined;

var _normalizeHelper = require('./normalize-helper');

var _fileHelper = require('./file-helper');

var _cryptographyHelper = require('./cryptography-helper');

var _cryptographyHelper2 = _interopRequireDefault(_cryptographyHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.normalizePath = _normalizeHelper.normalizePath;
exports.listFiles = _fileHelper.listFiles;
exports.hash = _cryptographyHelper2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseJson = undefined;

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// - Função para converter o conteúdo de um arquivo em um objeto javascript
function parseJson(file) {
    var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

    var obj = {};
    try {
        obj = {
            status: true,
            message: 'File read successfully',
            data: JSON.parse(fs.readFileSync(file, encoding))
        };
    } catch (err) {
        obj = {
            status: false,
            message: 'Invalid file'
        };
        _console2.default.log(err);
    }
    return obj;
}

exports.parseJson = parseJson;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// - Função para normalizar o caminho de um diretório
function normalizePath(path) {
    if (path != '') {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        if (!path.endsWith('/')) {
            path += '/';
        }
    }
    return path.trim();
}

exports.normalizePath = normalizePath;
