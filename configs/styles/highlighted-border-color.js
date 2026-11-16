const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const primaryColor = bsiProperty('primaryColor', '#16616d');
const secondaryColor = bsiProperty('secondaryColor', '#ff7d00');
const lightColor = bsiProperty('lightColor', '#ffffff');
const darkColor = bsiProperty('darkColor', '#000000');

module.exports = cx.style
    .withIdentifier('highlighted-border-UPmWsM')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Highlighted border')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('highlighted-border-none')
            .withLabel('No border') 
            .withCssClass('highlighted-border-none')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('border')
                    .withValue('0'),
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('bordercolor')
                    .withValue('transparent'),
            ),
        cx.styleOption
            .withStyleId('highlighted-border-primaryColor')
            .withLabel('Primary Color') 
            .withCssClass('highlighted-border-primaryColor')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('border')
                    .withValue('2'),
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('bordercolor')
                    .withValue(primaryColor),
            ),
        cx.styleOption
            .withStyleId('highlighted-border-secondaryColor')
            .withLabel('Secondary Color') 
            .withCssClass('highlighted-border-secondaryColor')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('border')
                    .withValue('2'),
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('bordercolor')
                    .withValue(secondaryColor),
            ),
        cx.styleOption
            .withStyleId('highlighted-border-lightColor')
            .withLabel('Light Color') 
            .withCssClass('highlighted-border-lightColor')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('border')
                    .withValue('2'),
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('bordercolor')
                    .withValue(lightColor),
            ),
        cx.styleOption
            .withStyleId('highlighted-border-darkColor')
            .withLabel('Dark Color') 
            .withCssClass('highlighted-border-darkColor')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('border')
                    .withValue('2'),
                cx.domManipulation
                    .withSelector('table.bsi-highlighted-content')
                    .withAttribute('bordercolor')
                    .withValue(darkColor),
            ),       
    );