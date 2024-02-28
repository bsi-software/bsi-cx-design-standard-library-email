const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const colTwoWidth = bsiProperty('colTwoWidth', 330).value;
const colTwoWideWidth = bsiProperty('colTwoWideWidth', 440).value;
const colTwoSlimWidth = bsiProperty('colTwoSlimWidth', 220).value;

module.exports = cx.style
    .withIdentifier('col-two-aspect-ratio-xc9btJ')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Seitenverhältnis')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('col-two-ratio-1-1')
            .withLabel('1 - 1')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-left')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('class')
                    .withValue('bsi-column'),
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-right')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('class')
                    .withValue('bsi-column')),
        cx.styleOption
            .withStyleId('col-two-ratio-2-1')
            .withLabel('2 - 1')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-left')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoWideWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoWideWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('class')
                    .withValue('bsi-column bsi-col-wide'),
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-right')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoSlimWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoSlimWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('class')
                    .withValue('bsi-column bsi-col-slim')),
        cx.styleOption
            .withStyleId('col-two-ratio-1-2')
            .withLabel('1 - 2')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-left')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoSlimWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoSlimWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-left')
                    .withAttribute('class')
                    .withValue('bsi-column bsi-col-slim'),
                cx.domManipulation
                    .withSelector('.bsi-col-two td.mso-column-right')
                    .withAttribute('style')
                    .withValue('width: '+ colTwoWideWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('style')
                    .withValue('max-width: '+ colTwoWideWidth +'px;'),
                cx.domManipulation
                    .withSelector('.bsi-col-two div.column-right')
                    .withAttribute('class')
                    .withValue('bsi-column bsi-col-wide')));