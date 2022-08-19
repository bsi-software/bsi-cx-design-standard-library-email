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
  elementId = 'table-2idv5Y',
  /*elementLabel = 'Table',*/
  elementLabel = 'Tabelle',
  elementPartId = 'table-part-slyKhe',
  /*elementPartLabel = 'Table'*/
  elementPartLabel = 'Tabelle'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TABLE)
  .withParts(
    cx.part.table
      .withId(elementPartId)
      .withLabel(elementPartLabel));