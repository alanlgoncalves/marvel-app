import md5 from 'md5';

const apiKey = {
  ts: 'marvel-api',
  apikey: 'public-key',
  hash: md5('marvel-api' + 'private-key' + 'public-key'),
};

export default apiKey;
