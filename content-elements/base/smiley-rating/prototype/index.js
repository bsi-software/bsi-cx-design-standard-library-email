const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzone1Id
 * @param {string} dropzone2Id
 * @param {string} dropzone3Id
 * @param {string} dropzone4Id
 * @param {string} dropzone5Id
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'smiley-rating-r74TPz',
  elementLabel = 'Smiley rating',
  dropzone1Id = 'smiley-rating-dropzone-1-otTRwZ',
  dropzone2Id = 'smiley-rating-dropzone-2-aRGgs6',
  dropzone3Id = 'smiley-rating-dropzone-3-kjidBh',
  dropzone4Id = 'smiley-rating-dropzone-4-4Y5G8S',
  dropzone5Id = 'smiley-rating-dropzone-5-0hSgre',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SMILEY)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzone1Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('../../img-10')),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('../../img-10')),
    cx.dropzone
      .withDropzone(dropzone3Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('../../img-10')),
    cx.dropzone
      .withDropzone(dropzone4Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('../../img-10')),
    cx.dropzone
      .withDropzone(dropzone5Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(
        require('../../img-10')));