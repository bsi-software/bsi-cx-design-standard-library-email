const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../../base');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} iteratorPartId
 * @param {string} iteratorPartLabel
 * @param {string} dropzoneImageId
 * @param {string} dropzoneContentId
 * @param {[ContentElement]} dropzoneImageAllowedElements
 * @param {[ContentElement]} dropzoneContentAllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'product-iterator-Qm7RtZ',
  /*elementLabel = 'Product iterator',*/
  elementLabel = 'Produkt Iterator',
  iteratorPartId = 'product-iterator-part-Vh3kXp',
  iteratorPartLabel = 'Iterator',
  dropzoneImageId = 'product-iterator-dropzone-image-L8wNcd',
  dropzoneContentId = 'product-iterator-dropzone-content-T2pGfa',
  dropzoneImageAllowedElements = [require('../../../base/image')],
  dropzoneContentAllowedElements = [...contentElements]
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withParts(
    cx.part.iterator
      .withId(iteratorPartId)
      .withLabel(iteratorPartLabel))
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneImageId)
      .withAllowedElements(...dropzoneImageAllowedElements),
    cx.dropzone
      .withDropzone(dropzoneContentId)
      .withAllowedElements(...dropzoneContentAllowedElements));
