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
                    .withSelector('table.layout-footer-background')
                    .withAttribute('align')
                    .withValue('left'),
                cx.domManipulation
                    .withSelector('td.bsi-footer-col')
                    .withAttribute('align')
                    .withValue('left'),
                cx.domManipulation
                    .withSelector('table.bsi-footer-col-mso')
                    .withAttribute('align')
                    .withValue('left'),
                cx.domManipulation
                    .withSelector('.layout-footer-content')
                    .withAttribute('style')
                    .withValue('margin-left: 0; margin-right: auto;')
            ),
       cx.styleOption
            .withStyleId('align-footer-center')
            .withLabel('Center')
            .withCssClass('align-center')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('align')
                    .withValue('center'),
                cx.domManipulation
                    .withSelector('td.bsi-footer-col')
                    .withAttribute('align')
                    .withValue('center'),
                cx.domManipulation
                    .withSelector('table.bsi-footer-col-mso')
                    .withAttribute('align')
                    .withValue('center'),
                cx.domManipulation
                    .withSelector('.layout-footer-content')
                    .withAttribute('style')
                    .withValue('margin-left: auto !important; margin-right: auto !important;')
            ),
        cx.styleOption
            .withStyleId('align-footer-right')
            .withLabel('Right')
            .withCssClass('align-right')
            .withDomManipulations(
                cx.domManipulation
                    .withSelector('table.layout-footer-background')
                    .withAttribute('align')
                    .withValue('right'),
                cx.domManipulation
                    .withSelector('td.bsi-footer-col')
                    .withAttribute('align')
                    .withValue('right'),
                cx.domManipulation
                    .withSelector('table.bsi-footer-col-mso')
                    .withAttribute('align')
                    .withValue('right'),
                cx.domManipulation
                    .withSelector('.layout-footer-content')
                    .withAttribute('style')
                    .withValue('margin-left: auto; margin-right: 0;')));