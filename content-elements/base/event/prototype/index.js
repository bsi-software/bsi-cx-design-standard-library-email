const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} locationIconPartId
 * @param {string} locationIconPartLabel
 * @param {string} locationTextPartId
 * @param {string} locationTextPartLabel
 * @param {string} dateIconPartId
 * @param {string} dateIconPartLabel
 * @param {string} dateTextPartId
 * @param {string} dateTextPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'event-5yyfwR',
  elementLabel = 'Event',
  locationIconPartId = 'event-part-location-icon-x2nxDL',
  locationIconPartLabel = 'Location icon',
  locationTextPartId = 'event-part-location-text-7612sK',
  locationTextPartLabel = 'Location text',
  dateIconPartId = 'event-part-date-icon-aJBaMj',
  dateIconPartLabel = 'Date icon',
  dateTextPartId = 'event-part-date-text-x1Vpp0',
  dateTextPartLabel = 'Date text'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withParts(
    cx.part.image
      .withId(locationIconPartId)
      .withLabel(locationIconPartLabel),
    cx.part.plainText
      .withId(locationTextPartId)
      .withLabel(locationTextPartLabel),
    cx.part.image
      .withId(dateIconPartId)
      .withLabel(dateIconPartLabel),
    cx.part.plainText
      .withId(dateTextPartId)
      .withLabel(dateTextPartLabel));