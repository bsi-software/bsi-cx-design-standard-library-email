const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const footerDarkBackgroundColor = bsiProperty('footerDarkBackgroundColor', '#383e42');
const footerLightBackgroundColor = bsiProperty('footerLightBackgroundColor', '#ffffff');
const footerDarkTextColor = bsiProperty('footerDarkTextColor', '#ffffff');
const footerLightTextColor = bsiProperty('footerLightTextColor', '#000000');
const footerDarkPadding = bsiProperty('footerDarkPadding', 30).value;
const footerLightPadding = bsiProperty('footerLightPadding', 4).value;

module.exports = cx.style
    .withIdentifier('layout-footer-background-color-3LlSI')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Hintergrund')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('layout-footer-background-dark')
            .withLabel('Dunkel')
            .withCssClass('bsi-footer-bg-dark')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('style')
                    .withValue('background-color: '+ footerDarkBackgroundColor +';'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background div.layout-footer-content')
                    .withAttribute('style')
                    .withValue('color: '+ footerDarkTextColor +';'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background div.layout-footer-content')
                    .withAttribute('style')
                    .withValue('padding: '+ footerDarkPadding +'px 4px '+ footerDarkPadding +'px 4px;'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-color-footer')),
        cx.styleOption
            .withStyleId('layout-footer-background-light')
            .withLabel('Hell')
            .withCssClass('bsi-footer-bg-light')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('style')
                    .withValue('background-color: '+ footerLightBackgroundColor +';'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background div.layout-footer-content')
                    .withAttribute('style')
                    .withValue('color: '+ footerLightTextColor +';'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background div.layout-footer-content')
                    .withAttribute('style')
                    .withValue('padding: '+ footerLightPadding +'px 4px '+ footerLightPadding +'px 4px;'),
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('class')
                    .withValue('bsi-dm-bg-color')));