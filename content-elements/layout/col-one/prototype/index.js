const {cx, Icon} = require('@bsi-cx/design-build');
const {colOneElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneId
 * @param {[ContentElement]} dropzoneAllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-one-DMfkNr',
  elementLabel = '1 Column',
  dropzoneId = 'col-one-dropzone-GYTnrx',
  dropzoneAllowedElements= [...colOneElements]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(...dropzoneAllowedElements));