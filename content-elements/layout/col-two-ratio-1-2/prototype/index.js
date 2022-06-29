const {cx, Icon} = require('@bsi-cx/design-build');
const {colTwoSlimElements, colTwoWideElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-two-ratio-1-2-v52yUl',
  elementLabel = '2 Columns',
  elementDescription = 'ratio 1:2',
  dropzone1Id = 'col-two-ratio-1-2-dropzone-1-7yehp5',
  dropzone2Id = 'col-two-ratio-1-2-dropzone-2-zcjnWE',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.TWO_COLUMNS)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzone1Id)
      .withAllowedElements(
        ...colTwoSlimElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(
        ...colTwoWideElements));