import md5 from 'md5';

const apiKey = {
  ts: 'marvel-api',
  apikey: '607702306e1d5a4caa024f7aaa3ee1eb',
  hash: md5(
    'marvel-api' +
      '2e74267cc49e590b8a90aadab3b02bdbb1c84d8c' +
      '607702306e1d5a4caa024f7aaa3ee1eb',
  ),
};

export default apiKey;
