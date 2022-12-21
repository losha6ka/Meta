let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__links');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
let menuBtnSecond = document.querySelector('.menu-btn');
let menuSecond = document.querySelector('.header__spisok');
menuBtnSecond.addEventListener('click', function () {
	menuBtnSecond.classList.toggle('activer');
	menuSecond.classList.toggle('activer');
});
$(document).ready(function () {
	$(".menu-btn").click(function (event) {
		$('body').toggleClass('lock');
	});
});
function myFunction() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 3,
	initialSlide: 1,
	centeredSlides: true,
	grabCursor: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			initialSlide: 2,
		},
		1130: {
			slidesPerView: 3,
		},
	},

});
const swiper1 = new Swiper('.artist-swiper', {
	// Optional parameters
	direction: 'horizontal',

	slidesPerView: 1,
	initialSlide: 4,
	centeredSlides: true,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1130: {
			slidesPerView: 3,
		},
	},

});
const swiper2 = new Swiper('.team-swiper', {
	// Optional parameters
	direction: 'horizontal',

	slidesPerView: 3,
	initialSlide: 1,
	centeredSlides: true,
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1130: {
			slidesPerView: 3,
		},
	},

});
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 25) $(".header__container").removeClass('fixed');
	else $(".header__container").addClass('fixed');
});
$(document).ready(function () {
	$('.spoiler-questions__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300)
	})
});
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.img-wave__title,.img-wave__subtitle,.img-wave__img,.body-wave__title,.body-wave__text,.body-wave__button,.artist-swiper,.story__main-title,.story__title,.fullscreen__img,.roadmap__card,.logoholder__title,.logoholder__item,.questions__title,.questions__img,.spoiler-questions__title,.team,.team-slide__item,.discord__title,.discord__text,.discord__button,.discord__img,.footer__logo,.footer__column-1,.footer__column-2,.footer__column-3,swiper-slide__b-title,.links-body__link,.block-story');

for (let elm of elements) {
	observer.observe(elm);
};
function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(cityName).style.display = "flex";
	evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
function slowScroll(id) {
	var offset = 100;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;
} 