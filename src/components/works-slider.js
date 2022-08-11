import Swiper, { Navigation, EffectFlip } from 'swiper'
Swiper.use([Navigation, EffectFlip])

const swiper = new Swiper('.works__slider', {
	direction: 'horizontal',
	slidesPerView: 1,
	loop: true,
	spaceBetween: 0,
	enabled: true,
	speed: 1000,

	effect: 'flip',
	flipEffect: {
		slideShadows: false,
	},

	// preventInteractionOnTransition: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
