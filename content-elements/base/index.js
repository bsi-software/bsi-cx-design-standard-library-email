const contentElements = [
  require('./title-h1'),
  require('./text'),
  require('./cta'),
  require('./highlighted-content'),
  require('./table'),
  require('./spacer'),
  require('./divider')
];

const colOneElements = [
  ...contentElements,
  require('./image'),
  require('./news-snippet'),
  require('./smiley-rating'),
  require('./event')
];

const footerElements = [
  require('./footer-link'),
  require('./social-media-follow'),
  require('./text'),
  require('./divider'),
  require('./spacer')
];

module.exports.contentElements = contentElements;
module.exports.colOneElements = colOneElements;
module.exports.footerElements = footerElements;