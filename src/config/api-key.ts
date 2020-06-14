import md5 from 'md5';

const apiKey = {
  ts: 'marvel-api',
  apikey: 'public_key',
  hash: md5('marvel-api' + 'private_key' + 'public_key'),
};

export default apiKey;
