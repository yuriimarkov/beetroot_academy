$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        //        Если не использовать scroll active

        //        $('a').each(function () {
        //            $(this).removeClass('active');
        //        })
        //        $(this).addClass('active');
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
                return false;
            }
        }
    });
});