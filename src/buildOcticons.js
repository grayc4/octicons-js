export function builder( { attr, child } ) {
    return function createSVG() {
        const svg = document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' );

        Object.entries( attr ).forEach( ( [ key, value ] ) => {
            svg.setAttribute( key, value );
        } );

        child.forEach( childElement => {
            const element = document.createElementNS( 'http://www.w3.org/2000/svg', childElement.tag );

            if ( childElement.attr ) {
                Object.entries( childElement.attr ).forEach( ( [ key, value ] ) => {
                    element.setAttribute( key, value );
                } );
            }

            svg.appendChild( element );
        } );

        return svg;
    };
}