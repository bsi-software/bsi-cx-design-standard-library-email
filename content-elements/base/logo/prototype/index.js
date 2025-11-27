const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @param {string} imageDarkPartId
 * @param {string} imageDarkPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'logo-3I1Ntx',
  elementLabel = 'Logo',
  elementDescription = 'Logo mit Erscheinungsbild',
  imagePartId = 'logo-part-5onUvI',
  imagePartLabel = 'Logo Light-Mode',
  imageDarkPartId = 'logo-dark-part-ORDw0N',
  imageDarkPartLabel = 'Logo Dark-Mode'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.IMAGE)
  .withStyleConfigs(require('../../../../configs/styles/image-width'))
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel),
    cx.part.image
      .withId(imageDarkPartId)
      .withLabel(imageDarkPartLabel));