const { join } = require('path');

const serverError = (req, res, next) => {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};
module.exports = serverError;
