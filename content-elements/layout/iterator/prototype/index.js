const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} iteratorPartId
 * @param {string} iteratorPartLabel
 * @param {string} dropzoneId
 * @param {[ContentElement]} dropzoneAllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'iterator-Hn4sWq',
  elementLabel = 'Iterator',
  iteratorPartId = 'iterator-part-Zc6yLb',
  iteratorPartLabel = 'Iterator',
  dropzoneId = 'iterator-dropzone-Pk2mVe',
  dropzoneAllowedElements = [
    require('../../col-one'),
    require('../../col-two'),
    require('../../col-two-ratio-2-1'),
    require('../../col-three'),
    require('../../../base/spacer'),
    require('../../../base/divider')]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.LIST)
  .withParts(
    cx.part.iterator
      .withId(iteratorPartId)
      .withLabel(iteratorPartLabel))
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(...dropzoneAllowedElements));
