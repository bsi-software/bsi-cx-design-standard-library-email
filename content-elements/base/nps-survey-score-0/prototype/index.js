const {cx, Icon} = require('@bsi-cx/design-build');


module.exports = (
    template = require('../template.twig'),
    elementId = 'nps-extra-score-6GpT4d',
    elementLabel = 'NPS Survey Score 0'
) => cx
    .contentElement
    .withFile(template)
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withIcon(Icon.MEGAPHONE)
    .withParts(
        cx.part.link
            .withId("link0")
            .withLabel("Link 0")
    )
