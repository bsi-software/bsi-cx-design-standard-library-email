const {cx, Icon} = require('@bsi-cx/design-build');
const {footerLayoutElements} = require('../../../layout');

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
  elementId = 'layout-dark-footer-x1LvCb',
  /*elementLabel = 'Layout dark',*/
  elementLabel = 'Footer Layout',
  dropzoneId = 'layout-dark-footer-dropzone-S2Twva',
  dropzoneAllowedElements= [require('../../../base/spacer'), require('../../../base/divider'), ...footerLayoutElements]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(require('../../../../configs/styles/layout-footer-background-color'))
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(...dropzoneAllowedElements));