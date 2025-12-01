const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const baseBackground = bsiProperty('colOneBaseBackgroundColor', '#ffffff');
const coloredBackground = bsiProperty('colOneColoredBackgroundColor', '#f4f4f4');

module.exports = cx.style
    .withIdentifier('colOne-background-color-mMvJ1q')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Hintergrund')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('colOne-background-white')
            .withLabel('Weiss')
            .withCssClass('bsi-col-one-base')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('div.bsi-column')
                    .withAttribute('style')
                    .withValue('background-color: '+ baseBackground +';'),
                cx.domManipulation
                    .withSelector('div.bsi-column')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-color'),
                cx.domManipulation
                    .withSelector('td.bsi-col-one-td-column')
                    .withAttribute('style')
                    .withValue('background-color: '+ baseBackground +';'),  
                ),
        cx.styleOption
            .withStyleId('colOne-background-colored')
            .withLabel('Farbig')
            .withCssClass('bsi-col-one-colored')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('div.bsi-column')
                    .withAttribute('style')
                    .withValue('background-color: '+ coloredBackground +';'),
                cx.domManipulation
                    .withSelector('div.bsi-column')
                    .withAttribute('class')
                    .withValue('bsi-dm-colOne-colored'),
            cx.domManipulation
                    .withSelector('td.bsi-col-one-td-column')
                    .withAttribute('style')
                    .withValue('background-color: '+ coloredBackground +';')));