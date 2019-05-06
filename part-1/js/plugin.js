(function($) {
    /**
     * Kita buat plugin dengan nama "changeThemeToRed".
     * Plugin ini digunakan untuk memasang tema warna merah pada suatu element.
     * 
     * Cara menggunakannya:
     * $('your-element').changeThemeToRed();
     */
    $.fn.changeThemeToRed = function() {
        return this.each(function(index, element) {
            $(element)
                // ubah background jadi warna merah
                .css("background-color", "red")

                // ubah warna text jadi warna putih
                .css("color", "white");
        });
    };
 })(jQuery);