$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function () {
    $('.colors').each(function () {
        var activeColor = $(this).attr('id');
        if ($(this).isInViewport()) {
            var src = $(this).data('imageurl');
            var vrc = $(this).data('mobileurl');
            var $window = $(window);
            function checkWidth() {
                var windowsize = $window.width();
                if (windowsize < 601) {
                    $("#fixed-a img").attr("src", vrc);
                    $("#fixed-m img").attr("src", vrc);
                    $("#fixed-o img").attr("src", vrc);
                    $("#fixed-p img").attr("src", vrc);
                    $("#fixed-o img").attr("src", vrc);
                    $("#fixed-x img").attr("src", vrc);
                    $("#fixed-z img").attr("src", vrc);
                    $("#fixed-architech img").attr("src", vrc);
                    $("#fixed-footer img").attr("src", vrc);
//                    $("#fixed-n video").attr("src", vsrc);
                } else {
                    $("#fixed-a img").attr("src", src);
                    $("#fixed-m img").attr("src", src);
                    $("#fixed-o img").attr("src", src);
                    $("#fixed-p img").attr("src", src);
                    $("#fixed-o img").attr("src", src);
                    $("#fixed-x img").attr("src", src);
                    $("#fixed-z img").attr("src", src);
                    $("#fixed-architech img").attr("src", src);
                    $("#fixed-footer img").attr("src", src);
//                    $("#fixed-n video").attr("src", ssrc);
                }
            }
            checkWidth();
            $(window).resize(checkWidth);
            //$('#fixed-' + activeColor).addClass(activeColor + '-active').css({"transition": "opacity 0.0s linear;", "visibility": "visible", "opacity": "1"});
            $('#fixed-' + activeColor).addClass(activeColor + '-active').css({"transition": "visibility 1s 0.5s, opacity 0.9s linear;", "visibility": "visible", "opacity": "1"});
        } else {
            // $('#fixed-' + activeColor).removeClass(activeColor + '-active').css({"transition": "visibility 0s 0.0s, opacity 0.0s linear", "visibility": "hidden", "opacity": "0.1"});
            $('#fixed-' + activeColor).removeClass(activeColor + '-active').css({"transition": "visibility 0.5s 0.5s, opacity 0.9s linear", "visibility": "hidden", "opacity": "0"});
        }
    });
    $('.colorss').each(function () {
        var activeColor = $(this).attr('id');
        if ($(this).isInViewport()) {
            var src = $(this).data('imageurl');
            var vrc = $(this).data('mobileurl');
//            var ssrc = $(this).data('videourl');
//            var vsrc = $(this).data('videomurl');
            var $window = $(window);
            function checkWidth() {
                var windowsize = $window.width();
                if (windowsize < 601) {
                    $("#fixed-b img").attr("src", vrc);
                    $("#fixed-c img").attr("src", vrc);
                    $("#fixed-d img").attr("src", vrc);
                    $("#fixed-e img").attr("src", vrc);
                    $("#fixed-f img").attr("src", vrc);
                    $("#fixed-g img").attr("src", vrc);
                    $("#fixed-h img").attr("src", vrc);
                    $("#fixed-i img").attr("src", vrc);
                    $("#fixed-j img").attr("src", vrc);
                    $("#fixed-k img").attr("src", vrc);
                    $("#fixed-l img").attr("src", vrc);
//                    $("#fixed-n video").attr("src", vsrc);
                } else {
                    $("#fixed-b img").attr("src", src);
                    $("#fixed-c img").attr("src", src);
                    $("#fixed-d img").attr("src", src);
                    $("#fixed-e img").attr("src", src);
                    $("#fixed-f img").attr("src", src);
                    $("#fixed-g img").attr("src", src);
                    $("#fixed-h img").attr("src", src);
                    $("#fixed-i img").attr("src", src);
                    $("#fixed-j img").attr("src", src);
                    $("#fixed-k img").attr("src", src);
                    $("#fixed-l img").attr("src", src);
//                    $("#fixed-n video").attr("src", ssrc);
               }
            }
            checkWidth();
            $(window).resize(checkWidth);

            $('#fixed-' + activeColor).addClass(activeColor + '-active').css({"transition": "opacity 0.0s linear;", "visibility": "visible", "opacity": "1"});
            //$('#fixed-' + activeColor).addClass(activeColor + '-active').css({"transition": "opacity 0.9s linear;", "visibility": "visible", "opacity": "1"});
        } else {
//
            $('#fixed-' + activeColor).removeClass(activeColor + '-active').css({"transition": "visibility 0s 0.0s, opacity 0.0s linear", "visibility": "hidden", "opacity": "0"});
            // $('#fixed-' + activeColor).removeClass(activeColor + '-active').css({"transition": "visibility 0.5s 0.5s, opacity 0.9s linear", "visibility": "hidden", "opacity": "0.1"});
        }
    });
}
);

