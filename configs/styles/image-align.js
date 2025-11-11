const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const TABLE_SELECTOR = 'td.bsi-image-col';
const IMAGE_SELECTOR = 'img.bsi-image';

module.exports = cx.style
    .withIdentifier('image-align-UPmQ3M')
    //.withMinVersion(Version.CX_23_2)
    .withLabel('Image alignment')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('image-left')
            .withLabel('Left') 
            .withCssClass('align-left')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue('left'),
                cx.domManipulation
                    .withSelector(IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('margin-left: 0; margin-right: auto;')
            ),
       cx.styleOption
            .withStyleId('image-center')
            .withLabel('Center')
            .withCssClass('align-center')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue('center'),
                cx.domManipulation
                    .withSelector(IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('margin-left: auto; margin-right: auto;')
            ),
        cx.styleOption
            .withStyleId('image-right')
            .withLabel('Right')
            .withCssClass('align-right')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue('right'),
                cx.domManipulation
                    .withSelector(IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('margin-left: auto; margin-right: 0;')));