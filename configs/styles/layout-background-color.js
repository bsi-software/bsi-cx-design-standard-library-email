const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const baseBackground = bsiProperty('layoutBaseBackgroundColor', '#ffffff');
const coloredBackground = bsiProperty('layoutColoredBackgroundColor', '#f4f4f4');

module.exports = cx.style
    .withIdentifier('layout-background-color-yHvJ1q')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Hintergrund')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('layout-background-white')
            .withLabel('Weiss')
            .withCssClass('bsi-layout-base')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-base-background')
                    .withAttribute('style')
                    .withValue('background-color: '+ baseBackground +';'),
                cx.domManipulation
                    .withSelector('table.layout-base-background')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-color')),
        cx.styleOption
            .withStyleId('layout-background-colored')
            .withLabel('Farbig')
            .withCssClass('bsi-layout-colored')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-base-background')
                    .withAttribute('style')
                    .withValue('background-color: '+ coloredBackground +';'),
                cx.domManipulation
                    .withSelector('table.layout-base-background')
                    .withAttribute('class')
                    .withValue('bsi-dm-layout-colored')));