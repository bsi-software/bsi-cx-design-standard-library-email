const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @param {[ContentElement]} dropzone1AllowedElements
 * @param {[ContentElement]} dropzone2AllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-two-qiB14A',
  elementLabel = '2 Columns',
  dropzone1Id = 'col-two-dropzone-1-rRaE9R',
  dropzone2Id = 'col-two-dropzone-2-K1vkFU',
  dropzone1AllowedElements= [...contentElements],
  dropzone2AllowedElements= [...contentElements]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TWO_COLUMNS)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzone1Id)
      .withAllowedElements(...dropzone1AllowedElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(...dropzone2AllowedElements));