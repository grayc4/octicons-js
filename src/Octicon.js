export function Octicon( { icon, size = 16, className = '' } ) {
    const container = document.createElement( 'div' );
    container.className = className;
    const svgElement = icon();

    if ( size ) {
        svgElement.setAttribute( 'width', size.toString() );
        svgElement.setAttribute( 'height', size.toString() );
    }

    container.appendChild( svgElement );
    return container;
}