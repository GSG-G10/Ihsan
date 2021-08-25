const { join } = require('path');

const errorNotFound = (req, res, next) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};
module.exports = errorNotFound;
