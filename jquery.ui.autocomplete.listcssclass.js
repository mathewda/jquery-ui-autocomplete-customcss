/*
 * jQuery UI Autocomplete HTML Extension
 *
 * Copyright 2011, David Mathew (http://usabilitydistilled.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/mathewda/jquery-ui-autocomplete-customcss
 */

(function( $ ) {

    var proto = $.ui.autocomplete.prototype,
        renderMenu = proto._renderMenu;

    $.extend( proto, {
        _renderMenu: function(ul, items) {
            if ("listCssClass" in this.options) {
                $(ul).addClass(this.options.listCssClass);
            }
            renderMenu.apply(this, arguments);
        }
    });

})( jQuery );