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
 * @param {[ContentElement]} dropzone1AllowedElements
 * @param {[ContentElement]} dropzone2AllowedElements
 * @param {[ContentElement]} dropzone3AllowedElements
 * @param {[ContentElement]} dropzone4AllowedElements
 * @param {[ContentElement]} dropzone5AllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'smiley-rating-r74TPz',
  /*elementLabel = 'Smiley rating',*/
  elementLabel = 'Smiley Bewertung',
  dropzone1Id = 'smiley-rating-dropzone-1-otTRwZ',
  dropzone2Id = 'smiley-rating-dropzone-2-aRGgs6',
  dropzone3Id = 'smiley-rating-dropzone-3-kjidBh',
  dropzone4Id = 'smiley-rating-dropzone-4-4Y5G8S',
  dropzone5Id = 'smiley-rating-dropzone-5-0hSgre',
  dropzone1AllowedElements= [require('../../img-10')],
  dropzone2AllowedElements= [require('../../img-10')],
  dropzone3AllowedElements= [require('../../img-10')],
  dropzone4AllowedElements= [require('../../img-10')],
  dropzone5AllowedElements= [require('../../img-10')]
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
      .withAllowedElements(...dropzone1AllowedElements),
    cx.dropzone
      .withDropzone(dropzone2Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(...dropzone2AllowedElements),
    cx.dropzone
      .withDropzone(dropzone3Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(...dropzone3AllowedElements),
    cx.dropzone
      .withDropzone(dropzone4Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(...dropzone4AllowedElements),
    cx.dropzone
      .withDropzone(dropzone5Id)
      .withMaxAllowedElements(1)
      .withAllowedElements(...dropzone5AllowedElements));