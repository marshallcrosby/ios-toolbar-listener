/*!
    * iOS Toolbar Resize Listener v1.0.0
    * Add/remove a class when the iOS Safari toolbar is expanded/condensed.
    *
    * Copyright 2022 Marshall Crosby
    * https://marshallcrosby.com
*/

let getUserAgent = window.navigator.userAgent,
    iOS = !!getUserAgent.match(/iPad/i) || !!getUserAgent.match(/iPhone/i),
    webkit = !!getUserAgent.match(/WebKit/i),
    iOSSafari = iOS && webkit && !getUserAgent.match(/CriOS/i),
    iosViewportHeight = 0;

window.addEventListener('resize', function() {
    if (iOSSafari) {
        if (iosViewportHeight > window.innerHeight) {
            document.body.classList.add('ios-toolbar-expanded');
        } else {
            document.body.classList.remove('ios-toolbar-expanded');
        }
        iosViewportHeight = window.innerHeight;
    }
});