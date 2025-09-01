(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	wowAnimation();
    aosAnimation();
});

/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};

/*----------- 22. One Page Nav ----------*/
function onePageNav(element) {
    if ($(element).length > 0) {
        $(element).each(function () {
        var link = $(this).find('a');
        $(this).find(link).each(function () {
            $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                scrollTop: target.offset().top - 10
                }, 1000);
            };

            });
        });
        })
    }
};
onePageNav('.onepage-nav');

/*=============================================
	=           Counter             =
=============================================*/
$.fn.countdown = function () {
    $(this).each(function () {
        var $counter = $(this);
        var offerDateStr = $counter.data("offer-date");
        var countDownDate = new Date(offerDateStr).getTime(); // Proper date parsing

        var exprireCls = "expired";

        function updateCounter() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(timer);
                $counter.addClass(exprireCls);
                $counter.find(".message").css("display", "block");
                return;
            }

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Always 2 digits
            $counter.find(".day").html(days.toString().padStart(2, "0"));
            $counter.find(".hour").html(hours.toString().padStart(2, "0"));
            $counter.find(".minute").html(minutes.toString().padStart(2, "0"));
            $counter.find(".seconds").html(seconds.toString().padStart(2, "0"));
        }

        // Initial call
        updateCounter();

        // Update every second
        var timer = setInterval(updateCounter, 1000);
    });
};

if ($(".counter-list").length) {
    $(".counter-list").countdown();
}


/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

/*=============================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}

/*=============================================
	=           Counter Number       =
=============================================*/
$(".counter-number").counterUp({
	delay: 10,
	time: 1000,
});


/*===========================================
=        Masonary Active         =
=============================================*/
    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.filter-item',
                },
            });
        }
    });

/*=============================================
	=    		Btn push span 	       =
=============================================*/

// Array of class selectors where effect apply hobe
const targetClasses = ['.btn'];

// Loop through each selector
targetClasses.forEach(function (selector) {
    $(selector).each(function () {
        // jodi .btn-five or .no-span na thake, tokhon span add hobe
        if (
        !$(this).hasClass('btn-five') &&
        !$(this).hasClass('no-span') &&
        $(this).find('span').length === 0
        ) {
        for (let i = 0; i < 4; i++) {
            $(this).append('<span></span>');
        }
        }
    });
});

/*=============================================
	=           Data Background             =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})
$("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
});

$("[data-text-color]").each(function () {
    $(this).css("color", $(this).attr("data-text-color"));
});


})(jQuery);