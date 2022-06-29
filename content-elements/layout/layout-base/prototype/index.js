const {cx, Icon} = require('@bsi-cx/design-build');
const {layoutElements} = require('../../../layout');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneId
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'layout-base-dziMWZ',
  elementLabel = 'Layout base',
  dropzoneId = 'layout-base-dropzone-7nPzXF',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require('../../../base/spacer'),
        require('../../../base/divider'),
        ...layoutElements));