const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @param {[ContentElement]} dropzone1AllowedElements
 * @param {[ContentElement]} dropzone2AllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'col-two-ratio-2-1-b694Yt',
  elementLabel = '2 Columns',
  elementDescription = 'ratio 2:1',
  dropzone1Id = 'col-two-ratio-2-1-dropzone-1-7xstGU',
  dropzone2Id = 'col-two-ratio-2-1-dropzone-2-N4gT0V',
  dropzone1AllowedElements= [...contentElements],
  dropzone2AllowedElements= [...contentElements]
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
      .withAllowedElements(...dropzone1AllowedElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withAllowedElements(...dropzone2AllowedElements));