const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'news-snippet-vR9oxJ',
  /*elementLabel = 'News snippet',*/
  elementLabel = 'News Snippet',
  elementPartId = 'news-snippet-part-gqB9Yz',
  /*elementPartLabel = 'News snippet'*/
  elementPartLabel = 'News Snippet'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SNIPPET)
  .withParts(
    cx.part.newsSnippet
      .withId(elementPartId)
      .withLabel(elementPartLabel));