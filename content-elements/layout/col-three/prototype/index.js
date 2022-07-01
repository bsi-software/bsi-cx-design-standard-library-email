const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @param {string} dropzone3Id
 * @param {[ContentElement]} dropzone1AllowedElements
 * @param {[ContentElement]} dropzone2AllowedElements
 * @param {[ContentElement]} dropzone3AllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-three-P2iWWk',
  elementLabel = '3 Columns',
  dropzone1Id = 'col-three-dropzone-1-mxExhj',
  dropzone2Id = 'col-three-dropzone-2-23ir6r',
  dropzone3Id = 'col-three-dropzone-3-ajc3B6',
  dropzone1AllowedElements= [...contentElements],
  dropzone2AllowedElements= [...contentElements],
  dropzone3AllowedElements= [...contentElements]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.THREE_COLUMNS)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzone1Id)
      .withAllowedElements(...dropzone1AllowedElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(...dropzone2AllowedElements),
    cx.dropzone
      .withDropzone(dropzone3Id)
      .withAllowedElements(...dropzone3AllowedElements));