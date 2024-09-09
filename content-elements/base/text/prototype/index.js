const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'text-Or4N33',
  elementLabel = 'Text',
  textPartId = 'text-part-5njcDS',
  textPartLabel = 'Text',
  textEditorConfig = require('../../../../configs/editor/full.js'),
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.formattedText
      .withHtmlEditorConfig(textEditorConfig)
      .withId(textPartId)
      .withLabel(textPartLabel));