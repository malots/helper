import console from 'console';
import fs from 'fs';

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

function fileExists(file) {
    try {
        return fs.existsSync(file);
    } catch(err) {
        console.log(err);
        return false;
    }
}

function readFile(file,encoding = 'utf8') {
    try {
        if (fileExists(file)) {
            return { status: true, message: file, data: fs.readFileSync(file, encoding) }
        } else {
            return { status: false, message: 'File not found' }
        }
    } catch(err) {
        console.log(err);
    }
}

export { listFiles, fileExists, readFile };