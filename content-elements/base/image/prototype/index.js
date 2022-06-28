const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'image-zLBggA',
  elementLabel = 'Image',
  elementDescription = '100% width',
  imagePartId = 'image-part-image-uzAw5t',
  imagePartLabel = 'Image',
  textPartId = 'image-part-text-ykSmGi',
  textPartLabel = 'Caption',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.IMAGE)
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel),
    cx.part.plainText
      .withId(textPartId)
      .withLabel(textPartLabel));