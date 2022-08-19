const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'img-10-3Xt35e',
  /*elementLabel = 'Image',*/
  elementLabel = 'Bild',
  /*elementDescription = '10% width',*/
  elementDescription = '10% Breite',
  imagePartId = 'img-10-part-4wGyyL',
  /*imagePartLabel = 'Image',*/
  imagePartLabel = 'Bild',
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
      .withLabel(imagePartLabel));