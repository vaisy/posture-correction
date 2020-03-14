//var carousel = document.querySelector('.carousel');
//if (carousel != null)
//    carousel.setAttribute('style', 'display:block;');
//var container = carousel.querySelector('.carousel-container');
//var prevBtn = carousel.querySelector('.carousel-prev');
//var nextBtn = carousel.querySelector('.carousel-next');
//var pagination = carousel.querySelector('.carousel-pagination');
//var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
//var totalItems = container.querySelectorAll('.carousel-item').length;
//var percent = (100 / totalItems);
//var currentIndex = 0;

//function next() {
//    slideTo(currentIndex + 1);
//}

//function prev() {
//    slideTo(currentIndex - 1);
//}

//function slideTo(index) {
//    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
//    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
//    bullets[currentIndex].classList.remove('active-bullet');
//    bullets[index].classList.add('active-bullet');
//    currentIndex = index;
//}

//bullets[currentIndex].classList.add('active-bullet');
//prevBtn.addEventListener('click', prev, false);
//nextBtn.addEventListener('click', next, false);

//pagination.addEventListener('click', function (e) {
//    var index = bullets.indexOf(e.target);
//    if (index !== -1 && index !== currentIndex) {
//        slideTo(index);
//    }
//}, false);

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