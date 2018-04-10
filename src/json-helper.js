import console from 'console';
import { readFile } from './file-helper';

function parseJson(file,encoding='utf8') {
    let obj = {};
    const fileContent = readFile(file,encoding);
    if (fileContent.status) {
        try{
            obj = fileContent;
        } catch(err) {
            obj = {
                status: false,
                message: 'Invalid file format'
            };
            console.log(err);
        }
    } else {
        obj =  fileContent;
    }
    return obj;
}

export { parseJson };

//TODO: finalizar essa função

