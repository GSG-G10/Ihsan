const { join } = require('path');

const errorIssue = (req, res, next) => {
  res
    .status(400)
    .sendFile(join(__dirname, '..', '..', 'public', 'html', '400.html'));
};
module.exports = errorIssue;
