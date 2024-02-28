const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const primaryColor = bsiProperty('primaryColor', '#16616d');
const secondaryColor = bsiProperty('secondaryColor', '#ff7d00');
const darkColor = bsiProperty('darkColor', '#000000');

module.exports = cx.style
    .withIdentifier('title-color-iZpHGl')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Farbe')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('title-color-primary')
            .withLabel('Primärfarbe')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-title-element .bsi-title-color')
                    .withAttribute('style')
                    .withValue('color: '+ primaryColor +';')),
        cx.styleOption
            .withStyleId('title-color-secondary')
            .withLabel('Sekundärfarbe')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-title-element .bsi-title-color')
                    .withAttribute('style')
                    .withValue('color: '+ secondaryColor +';')),
        cx.styleOption
            .withStyleId('title-color-dark')
            .withLabel('Dunkel')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-title-element .bsi-title-color')
                    .withAttribute('style')
                    .withValue('color: '+ darkColor +';')));