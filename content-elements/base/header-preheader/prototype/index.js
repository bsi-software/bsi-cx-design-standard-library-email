const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} previewPartId
 * @param {string} previewPartLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'header-preheader-cVwk8f',
  /*elementLabel = 'Pre-header',*/
  elementLabel = 'Pre-Header',
  previewPartId = 'header-preheader-part-preview-rWi96c',
  /*previewPartLabel = 'Preview text (visible in e-mail client below subject line)',*/
  previewPartLabel = 'Vorschautext (sichtbar im E-Mail-Client unter der Betreffzeile)',
  textPartId = 'header-preheader-part-text-dpjafj',
  /*textPartLabel = 'Pre-header text (visible inside e-mail)'*/
  textPartLabel = 'Pre-Header Text (sichtbar in der E-Mail)'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.plainText
      .withId(previewPartId)
      .withLabel(previewPartLabel),
    cx.part.formattedText
      .withHtmlEditorConfig(require('../../../../configs/editor/full.js'))
      .withId(textPartId)
      .withLabel(textPartLabel));