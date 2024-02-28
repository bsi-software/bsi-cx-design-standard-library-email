const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const spacerHeightSmall = bsiProperty('spacerHeightSmall', 10).value;
const spacerHeightMedium = bsiProperty('spacerHeightMedium', 24).value;
const spacerHeightLarge = bsiProperty('spacerHeightLarge', 40).value;

module.exports = cx.style
    .withIdentifier('spacer-xr7NH3')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Grösse des Abstands')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('spacer-small')
            .withLabel('Klein')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-element-spacer div.spacer')
                    .withAttribute('style')
                    .withValue('line-height: '+ spacerHeightSmall +'px; height: '+ spacerHeightSmall +'px;')),
        cx.styleOption
            .withStyleId('spacer-medium')
            .withLabel('Medium')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-element-spacer div.spacer')
                    .withAttribute('style')
                    .withValue('line-height: '+ spacerHeightMedium +'px; height: '+ spacerHeightMedium +'px;')),
        cx.styleOption
            .withStyleId('spacer-large')
            .withLabel('Gross')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-element-spacer div.spacer')
                    .withAttribute('style')
                    .withValue('line-height: '+ spacerHeightLarge +'px; height: '+ spacerHeightLarge +'px;')));