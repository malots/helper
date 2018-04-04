import md5 from 'md5';
import sha512 from 'sha512';

// - Função utilizada para criptografar senhas
function hash(value) {
    return sha512(md5(value));
}

export default hash;