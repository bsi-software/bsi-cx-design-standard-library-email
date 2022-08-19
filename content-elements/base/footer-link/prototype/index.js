const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'footer-link-vc1KI1',
  /*elementLabel = 'Linked text',*/
  elementLabel = 'Verlinkter Text',
  elementPartId = 'footer-link-part-gN7hhF',
  elementPartLabel = 'Link'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.link
      .withId(elementPartId)
      .withLabel(elementPartLabel));