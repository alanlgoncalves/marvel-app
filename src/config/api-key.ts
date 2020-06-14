import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = 'public_key';
const privateKey = 'private_key';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;
