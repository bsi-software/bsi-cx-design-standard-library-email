const titleElements = [
  require('./title-h1')
];

const contentElements = [
  ...titleElements,
  require('./text'),
  require('./cta'),
  require('./highlighted-content'),
  require('./spacer'),
  require('./divider')
];

const colOneElements = [
  ...contentElements,
  require('./image'),
  require('./table'),
  require('./news-snippet'),
  require('./smiley-rating'),
  require('./event')
];

const colTwoElements = [
  ...contentElements
];

const colTwoSlimElements = [
  ...contentElements
];

const colTwoWideElements = [
  ...contentElements
];

const colThreeElements = [
  ...contentElements
];

const footerElements = [
  require('./footer-link'),
  require('./social-media-follow'),
  require('./text'),
  require('./divider'),
  require('./spacer')
];

module.exports.titleElements = titleElements;
module.exports.contentElements = contentElements;
module.exports.colOneElements = colOneElements;
module.exports.colTwoElements = colTwoElements;
module.exports.colTwoSlimElements = colTwoSlimElements;
module.exports.colTwoWideElements = colTwoWideElements;
module.exports.colThreeElements = colThreeElements;
module.exports.footerElements = footerElements;