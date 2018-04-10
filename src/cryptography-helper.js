import md5 from 'md5';
import sha512 from 'js-sha512';

function hash(value) {
    return value.trim() != '' ? sha512(md5(value.trim())) : '';
}

export default hash;