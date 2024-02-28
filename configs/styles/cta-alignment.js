const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const alignmentLeft = bsiProperty('alignmentLeft', 'left');
const alignmentCenter = bsiProperty('alignmentCenter', 'center');
const alignmentRight = bsiProperty('alignmentRight', 'right');

module.exports = cx.style
    .withIdentifier('cta-alignment-9gBAwb')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Ausrichtung')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('cta-alignment-left')
            .withLabel('Linksbündig')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.cta-alignment')
                    .withAttribute('align')
                    .withValue(alignmentLeft)),
        cx.styleOption
            .withStyleId('cta-alignment-center')
            .withLabel('Mittig')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.cta-alignment')
                    .withAttribute('align')
                    .withValue(alignmentCenter)),
        cx.styleOption
            .withStyleId('cta-alignment-right')
            .withLabel('Rechtsbündig')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.cta-alignment')
                    .withAttribute('align')
                    .withValue(alignmentRight)));