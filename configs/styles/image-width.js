const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

const imageWidth100Percent = bsiProperty('imageWidth100Percent', 640).value;
const imageWidth66Percent = bsiProperty('imageWidth66Percent', 420).value;
const imageWidth50Percent = bsiProperty('imageWidth50Percent', 310).value;
const imageWidth33Percent = bsiProperty('imageWidth33Percent', 200).value;

module.exports = cx.style
    .withIdentifier('image-width-UPnQ3W')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Bildbreite')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('image-width-100')
            .withLabel('100%')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('width')
                    .withValue(imageWidth100Percent),
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('style')
                    .withValue('width: '+ imageWidth100Percent +'px;')),
        cx.styleOption
            .withStyleId('image-width-66')
            .withLabel('66%')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('width')
                    .withValue(imageWidth66Percent),
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('style')
                    .withValue('width: '+ imageWidth66Percent +'px;')),
        cx.styleOption
            .withStyleId('image-width-50')
            .withLabel('50%')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('width')
                    .withValue(imageWidth50Percent),
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('style')
                    .withValue('width: '+ imageWidth50Percent +'px;')),
        cx.styleOption
            .withStyleId('image-width-33')
            .withLabel('33%')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('width')
                    .withValue(imageWidth33Percent),
                cx.domManipulation
                    .withSelector('img.bsi-image')
                    .withAttribute('style')
                    .withValue('width: '+ imageWidth33Percent +'px;')));