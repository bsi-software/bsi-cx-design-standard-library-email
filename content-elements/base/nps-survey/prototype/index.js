const { cx, Icon, bsiProperty } = require('@bsi-cx/design-build');

module.exports = (
    template = require('../template.twig'),
    elementId = 'nps-29c87d',
    elementLabel = 'NPS Survey',
    npsStartWith0 = bsiProperty('npsStartWith0', false) ? 1 : 0
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
        ...Array.from({ length: 10 + npsStartWith0 },
            (_, i) => cx.part.link
                .withLabel(`Link ${i + 1 - npsStartWith0}`)
                .withId(`link-${i + 1 - npsStartWith0}`))
    );
