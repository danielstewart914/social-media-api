const formatDateTime = timestamp => {
    const date = new Date( timestamp );
    return date.toLocaleDateString( 'en-us' ) + ' ' + date.toLocaleTimeString( 'en-us' );
}

module.exports = formatDateTime;