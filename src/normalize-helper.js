// - Função para normalizar o caminho de um diretório
function normalizePath(path) {
    if (path != '') {
        if (!path.startsWith('/')) {
            path = '/'+path;
        }
        if (!path.endsWith('/')) {
            path += '/';
        }
    }
    return path.trim();
}

export { normalizePath };
