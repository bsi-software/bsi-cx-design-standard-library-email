const {cx, Icon} = require('@bsi-cx/design-build');
const {footerLayoutElements} = require('../../../layout');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneId
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'layout-dark-footer-x1LvCb',
  elementLabel = 'Layout dark',
  dropzoneId = 'layout-dark-footer-dropzone-S2Twva',
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
        ...footerLayoutElements));