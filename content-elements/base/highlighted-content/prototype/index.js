const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneId
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'highlighted-content-8lm6Ih',
  elementLabel = 'Highlighted content',
  dropzoneId = 'highlighted-content-dropzone-4HtYBB',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require('../../text'),
        require('../../cta'),
        require('../../spacer'),
        require('../../title-h1')));