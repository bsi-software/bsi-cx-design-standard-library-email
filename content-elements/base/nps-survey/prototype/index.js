const {cx, Icon} = require('@bsi-cx/design-build');


module.exports = (
    template = require('../template.twig'),
    elementId = 'nps-29c87d',
    elementLabel = 'NPS Survey'
  ) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.MEGAPHONE)
  .withParts(
    cx.part.plainText
    .withId("min-a23f97")
    .withLabel("Min. Text value"),
    cx.part.plainText
    .withId("max-2f63e1")
    .withLabel("Max. Text value"),
    cx.part.plainText
    .withId("titleText-14fef7")
    .withLabel("Title text"),
    cx.part.link
    .withId("link0")
    .withLabel("Link 1"),
    cx.part.link
    .withId("link1")
    .withLabel("Link 2"),
    cx.part.link
    .withId("link2")
    .withLabel("Link 3"),
    cx.part.link
    .withId("link3")
    .withLabel("Link 4"),
    cx.part.link
    .withId("link4")
    .withLabel("Link 5"),
    cx.part.link
    .withId("link5")
    .withLabel("Link 6"),
    cx.part.link
    .withId("link6")
    .withLabel("Link 7"),
    cx.part.link
    .withId("link7")
    .withLabel("Link 8"),
    cx.part.link
    .withId("link8")
    .withLabel("Link 9"),
    cx.part.link
    .withId("link9")
    .withLabel("Link 10")
)