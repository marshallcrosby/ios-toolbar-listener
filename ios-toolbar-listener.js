/*!
    * Key Command Class Toggler v1.0.1
    * iOS has a "feature" where a large portion of the bottom of browser is the target area
      to activate the Safari bottom navigation bar. When a user clicks on the wellbar navigation items,
      and the navigation bar is hidden, it would activate the Safari bottom navigation bar instead
      of going to said navigation item. Instead I am checking if the browser is iOS Safari and
      showing/hiding the wellbar nav items depending on the height of the browser after a
      window resize event.
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