import console from 'console';
import fs from 'fs';

// - Função para listar os arquivos de um diretório
function listFiles(path) {
    const files = [];
    try {
        fs.readdirSync(path).forEach(file => {
            files.push(file);
        });
    } catch(err) {
        console.log(err);
    }
    return files;
}

export { listFiles };