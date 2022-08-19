const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'header-img-cftPW6',
  /*elementLabel = 'Header image',*/
  elementLabel = 'Header Bild',
  imagePartId = 'header-img-part-CrwKWp',
  /*imagePartLabel = 'Header image',*/
  imagePartLabel = 'Header Bild',
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