var fs = require('fs');

var images = fs.readdirSync(__dirname + '/../images/showcase', 'utf8');

module.exports = {
  'alt-text': 'Mynd úr starfinu',
  'file-names': images
};
