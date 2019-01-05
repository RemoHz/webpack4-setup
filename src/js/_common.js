;(function ($, App) {

    'use strict';

    /**
     * This partial javascript compiles into minified script file
     * and is a great place to register all globally running script.
     *
     * init() method block gets called automatically on *every* page,
     * use this as a starting point to invoke methods
     */

    var Common = function () {}

    Common.prototype.init = function() {
        $(document).on('render', $.proxy(this.onRender, this))
    }

    Common.prototype.onRender = function() {
    }

    window.App.Common = new Common();
    window.App.Common.init();

})(jQuery, window.App);
