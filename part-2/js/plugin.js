(function($) {
    /**
     * Define default parameter.
     * @var {Object}
     */
    var defaultParams = {
        backgroundColor: 'white',
        textColor: 'black'
    };

    /**
     * Methods object.
     * @var {Object}
     */
    var Methods = {
        /**
         * Default method.
         * @param {Object} options
         */
        init: function(options) {
            /**
             * Define plugin parameter.
             * @var {Object}
             */
            var settings = $.extend({
                backgroundColor: defaultParams.backgroundColor,
                textColor: defaultParams.textColor
            }, options);

            return this.each(function(index, element) {
                $(element)
                    .css("background-color", settings.backgroundColor)
                    .css("color", settings.textColor);
            });
        },

        /**
         * Destroy plugin, set theme to default.
         */
        destroy: function() {
            return this.each(function(index, element) {
                $(element)
                    .css("background-color", defaultParams.backgroundColor)
                    .css("color", defaultParams.textColor);
            });
        }
    };

    /**
     * Kita buat plugin dengan nama "changeTheme".
     * Plugin ini digunakan untuk memasang tema pada suatu element.
     * 
     * Cara menggunakannya:
     * $('your-element').changeTheme({
     *    backgroundColor: 'green',
     *    textColor: 'white'
     * });
     */
    $.fn.changeTheme = function(options) {
        if (Methods[options]) {
            return Methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {
            // default to "init"
            return Methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  options + ' does not exist.');
        }
    };
 })(jQuery);