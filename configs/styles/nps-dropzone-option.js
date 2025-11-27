const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('nps-score-zero-activation-')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Brauchen Sie eine Skala von 0 oder 1 bis 10?')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('nps-skala-1-10')
            .withLabel('1 bis 10')
            .withCssClass('skalaOneToTen')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('td.score-zero')
                    .withAttribute('style')
                    .withValue('display: none;')),
        cx.styleOption
            .withStyleId('nps-skala-0-10')
            .withLabel('0 bis 10')
            .withCssClass('skalaZeroToTen')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('td.score-zero')
                    .withAttribute('style')
                    .withValue('display: block;')));
