const {cx, Icon} = require('@bsi-cx/design-build');
const {footerElements} = require('../../../base');

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
  elementId = 'col-two-footer-YrjN4A',
  elementLabel = '2 Columns',
  dropzone1Id = 'col-two-footer-dropzone-1-WJcCmL',
  dropzone2Id = 'col-two-footer-dropzone-2-qCJrba',
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
        ...footerElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(
        ...footerElements));