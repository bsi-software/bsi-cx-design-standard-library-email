const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const TABLE_SELECTOR = 'td.bsi-image-col';
const IMAGE_SELECTOR = 'img.bsi-image';
const TEXT_IMAGE_SELECTOR = 'div.bsi-image-text';

const alignmentLeft = bsiProperty('alignmentLeft', 'left');
const alignmentCenter = bsiProperty('alignmentCenter', 'center');
const alignmentRight = bsiProperty('alignmentRight', 'right');

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
                    .withSelector(TEXT_IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('text-align: '+ alignmentLeft+ " !important; "),
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue(alignmentLeft),
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
                    .withSelector(TEXT_IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('text-align: '+ alignmentCenter+ " !important; "),
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue(alignmentCenter),
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
                    .withSelector(TEXT_IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('text-align: '+ alignmentRight+ " !important; "),
                cx.domManipulation
                    .withSelector(TABLE_SELECTOR)
                    .withAttribute('align')
                    .withValue(alignmentRight),
                cx.domManipulation
                    .withSelector(IMAGE_SELECTOR)
                    .withAttribute('style')
                    .withValue('margin-left: auto; margin-right: 0;')));