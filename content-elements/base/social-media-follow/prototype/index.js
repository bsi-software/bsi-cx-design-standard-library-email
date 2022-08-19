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
  elementId = 'social-media-follow-rbGrIr',
  /*elementLabel = 'Social media follow',*/
  elementLabel = 'Social Media Follow',
  elementPartId = 'social-media-follow-part-2PtqkD',
  /*elementPartLabel = 'Social media follow'*/
  elementPartLabel = 'Social Media Follow'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SOCIAL_FOLLOW)
  .withParts(
    cx.part.socialFollow
      .withId(elementPartId)
      .withLabel(elementPartLabel));