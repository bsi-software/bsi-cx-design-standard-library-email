const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'cta-eoRgSU',
  /*elementLabel = 'CTA button',*/
  elementLabel = 'CTA Button',
  /*elementDescription = 'left aligned',*/
  elementDescription = '',
  elementPartId = 'cta-part-YgQ87c',
  /*elementPartLabel = 'CTA button'*/
  elementPartLabel = 'CTA Button'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.MEGAPHONE)
  .withStyleConfigs(require('../../../../configs/styles/cta-alignment'))
  .withParts(
    cx.part.link
      .withId(elementPartId)
      .withLabel(elementPartLabel));