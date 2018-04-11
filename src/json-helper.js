import console from 'console';
import { readFile } from './file-helper';

function parseJson(file,encoding='utf8') {
    let obj = {};
    const fileContent = readFile(file,encoding);
    if (fileContent.status) {
        try{
            obj = {
                status: true,
                message: file,
                data: JSON.parse(fileContent.data)
            }
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

