import console from 'console';

// - Função para converter o conteúdo de um arquivo em um objeto javascript
function parseJson(file,encoding='utf8') {
    let obj = {};
    try{
        obj = {
            status: true,
            message: 'File read successfully',
            data: JSON.parse(fs.readFileSync(file, encoding))
        };
    } catch(err) {
        obj = {
            status: false,
            message: 'Invalid file'
        };
        console.log(err);
    }
    return obj;
}

export { parseJson };

