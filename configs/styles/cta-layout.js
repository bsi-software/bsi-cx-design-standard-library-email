const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const backgroundColor = bsiProperty('buttonBackgroundColor', '#2F4E66');
const borderColor = bsiProperty('buttonBorderColor', '#2F4E66');
const borderSize = bsiProperty('buttonBorderSize', 2).value;
const horizontalPadding = bsiProperty('buttonHorizontalPadding', 30).value;
const verticalPadding = bsiProperty ('buttonVerticalPadding', 10).value;
const borderFilled = (backgroundColor.hex == borderColor.hex) ? 'border: ' + '0' +';' : '';
//if border color and background color are different a border is already set and not necessary
const borderOutline = (backgroundColor.hex != borderColor.hex) ? '' : 'border: ' + borderSize + 'px ' + 'solid ' + borderColor +';';
const paddingFilled = (backgroundColor.hex == borderColor.hex) ? 'padding:' + (verticalPadding+borderSize) + 'px ' + (horizontalPadding+borderSize) + 'px' +';' : '';
const paddingOutline = (backgroundColor.hex == borderColor.hex) ? 'padding:' + verticalPadding + 'px ' + horizontalPadding + 'px' +';' : '';

module.exports = cx.style
    .withIdentifier('cta-layout-b2fd9420')
    .withMinVersion(Version.CX_23_2)
    /*.withLabel('Button layout')*/
    .withLabel('Button Layout')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('bsi-btn-filled')
            /*.withLabel('colored, filled')*/
            .withLabel('Farbig ausgefüllt')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-cta-wrapper td')
                    .withAttribute('style')
                    .withValue( 
                        'background-color: ' + backgroundColor +';'+
                        borderFilled),
                cx.domManipulation
                    .withSelector('.bsi-cta')
                    .withAttribute('style')
                    .withValue(
                        'color: ' + '#ffffff' +';' +
                        paddingFilled)),
        cx.styleOption
            .withStyleId('bsi-btn-outline')    
            /*.withLabel('colored, framed')*/
            .withLabel('Farbig umrandet')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-cta-wrapper td')
                    .withAttribute('style')
                    .withValue( 
                        'background-color: ' + 'transparent' +';'+ 
                        borderOutline),
                cx.domManipulation
                    .withSelector('.bsi-cta')
                    .withAttribute('style')
                    .withValue(
                        'color: ' + backgroundColor +';' + 
                        paddingOutline)));