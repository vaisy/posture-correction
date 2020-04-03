$('.faq li .question').click(function() {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
});



$(document).ready(function() {

    var carouselContainer = $('.carousel');
    var slideInterval = 5000000;

    function toggleH() {
        $('.toggleCaption').hide()
        var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

            function() {
                $(this).removeClass('animated fadeInRight')
            });
        caption.slideToggle();
    }

    function toggleC() {
        $('.toggleButton').hide()
        var button = carouselContainer.find('.active').find('.toggleButton').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

            function() {
                $(this).removeClass('animated fadeInUp')
            });
        button.slideToggle();
    }
    carouselContainer.carousel({
            interval: slideInterval,
            cycle: true,
            pause: "hover"
        })
        .on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
        .on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');

});

function HideModal(id) {
    if (id == 1) {
        $('#modalQuickView1').modal('hide');
    } else if (id == 2) {

        $('#modalQuickView2').modal('hide');
    } else if (id == 3) {

        $('#modalQuickView3').modal('hide');
    } else if (id == 4) {

        $('#modalQuickView4').modal('hide');
    } else if (id == 5) {

        $('#modalQuickView5').modal('hide');
    } else if (id == 6) {

        $('#modalQuickView6').modal('hide');
    }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}