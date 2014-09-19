/*
 * Functions etc. used for all devices
 */
"use strict";

/**
 * From: http://stackoverflow.com/questions/5836779/how-can-i-refresh-the-screen-on-browser-resize
 * Not sure whether we need this.  Chromium on Linux seems to reload when I resize already.
 * However, this may come in handy when we start testing on other browsers, etc.
 */
jQuery(function($) {
	var windowWidth = $(window).width();

	$(window).resize(function() {
		if ( windowWidth != $(window).width() ) {
			location.reload();
			return;
		}
	});
});

/**
 * I want to switch from using new to using Object.create() to create my objects.
 * To me, "new" implies classical inheritance.  Let's just let javascript be javascript.
 * From: http://javascript.crockford.com/prototypal.html
 * Also recommended by:
 * Example:
 *    newObject = Object.create(oldObject);
 * "Objects inherit from objects. What could be more object oriented than that?"
 */
if ( typeof Object.create !== 'function' ) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

