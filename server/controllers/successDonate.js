const { join } = require('path');

const successDonate = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'successful-donate.html'));
};

module.exports = successDonate;
