const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const baseBackground = bsiProperty('columnBaseBackgroundColor', '#ffffff00');
const coloredBackground = bsiProperty('columnColoredBackgroundColor', '#F6F7FB');

module.exports = cx.style
    .withIdentifier('column-background-color-YcsBrW')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Hintergrund')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('column-background-transparent')
            .withLabel('Transparent')
            .withCssClass('bsi-column-base')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('div.bsi-column-one-scheme')
                    .withAttribute('style')
                    .withValue('background-color: '+ baseBackground +';'),
                cx.domManipulation
                    .withSelector('div.bsi-column-one-scheme')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-column-color')),
        cx.styleOption
            .withStyleId('column-background-colored')
            .withLabel('Farbig')
            .withCssClass('bsi-column-colored')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('div.bsi-column-one-scheme')
                    .withAttribute('style')
                    .withValue('background-color: '+ coloredBackground +';'),
                cx.domManipulation
                    .withSelector('div.bsi-column-one-scheme')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-column-colored')));