"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePath = undefined;

var _normalizeHelper = require('./normalize-helper');

exports.normalizePath = _normalizeHelper.normalizePath;
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
