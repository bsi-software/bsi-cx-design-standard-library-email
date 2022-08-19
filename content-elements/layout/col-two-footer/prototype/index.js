const {cx, Icon} = require('@bsi-cx/design-build');
const {footerElements} = require('../../../base');

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
  elementId = 'col-two-footer-YrjN4A',
  /*elementLabel = '2 Footer columns',*/
  elementLabel = '2 Footer Spalten',
  dropzone1Id = 'col-two-footer-dropzone-1-WJcCmL',
  dropzone2Id = 'col-two-footer-dropzone-2-qCJrba',
  dropzone1AllowedElements= [...footerElements],
  dropzone2AllowedElements= [...footerElements]
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