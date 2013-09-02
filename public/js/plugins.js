// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(document).ready(function(){
    var elem = $('#hello');
    var speed = 1000;
    var switch_image = function() {
        if (elem.hasClass("img1")) {
            elem.fadeOut(speed, function() {
                elem.removeClass("img1").addClass("img2").fadeIn();
            });
        }
        else if (elem.hasClass("img2")) {
            elem.fadeOut(speed, function() {
                elem.removeClass("img2").addClass("img3").fadeIn();
            });
        }
        else {
            elem.fadeOut(speed, function() {
                elem.removeClass("img3").addClass("img1").fadeIn();
            });
        }
    };
    setInterval(switch_image, speed * 10);
});
