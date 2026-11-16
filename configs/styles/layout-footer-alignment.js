const {cx, Version, bsiProperty} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('layout-footer-alignment-UerQ3M')
    .withMinVersion(Version.CX_23_2)
    .withLabel('Footer alignment')
    .withStyleOptions(
        cx.styleOption
            .withStyleId('footer-left')
            .withLabel('Left') 
            .withCssClass('align-footer-left')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('style')
                    .withValue('text-align: left !important;'),
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('align')
                    .withValue('left')
            ),
       cx.styleOption
            .withStyleId('align-footer-center')
            .withLabel('Center')
            .withCssClass('align-center')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('style')
                    .withValue('text-align: center !important;'),
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('align')
                    .withValue('center')
            ),
        cx.styleOption
            .withStyleId('align-footer-right')
            .withLabel('Right')
            .withCssClass('align-right')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('style')
                    .withValue('text-align: right !important;'),
                cx.domManipulation
                    .withSelector('.bsi-column')
                    .withAttribute('align')
                    .withValue('right')));