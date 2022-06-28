const {cx, Icon} = require('@bsi-cx/design-build');
const {colTwoElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-two-qiB14A',
  elementLabel = '2 Columns',
  dropzone1Id = 'col-two-dropzone-1-rRaE9R',
  dropzone2Id = 'col-two-dropzone-2-K1vkFU',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TWO_COLUMNS)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzone1Id)
      .withAllowedElements(
        ...colTwoElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(
        ...colTwoElements));