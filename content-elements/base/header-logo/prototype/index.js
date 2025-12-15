const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @param {string} imageDarkPartId
 * @param {string} imageDarkPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'header-logo-XvovFj',
  elementLabel = 'Logo',
  imagePartId = 'header-logo-part-p94CZB',
  imagePartLabel = 'Logo'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.IMAGE)
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel));