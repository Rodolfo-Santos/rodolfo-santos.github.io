$(function ($) {
            var menuHeight = $('nav').innerHeight();
            $(".scroll").click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top - menuHeight
                }, 600);
            });
        }
)