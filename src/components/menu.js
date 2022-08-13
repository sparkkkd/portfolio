import { gsap } from 'gsap'

const burger = document.querySelector('.burger')
const closeMenu = document.querySelector('.menu-close')
const menuItems = document.querySelectorAll('.menu__item')

let tl = gsap.timeline({ paused: true })

/* ************** Animation setup ************** */
tl.to('.menu', {
	top: '50%',
	opacity: 1,
	duration: 1,
})

tl.to(
	'.hands-right',
	{
		x: 0,
		y: 0,
		opacity: 0.1,
		duration: 1,
	},
	0.5
)

tl.to(
	'.hands-left',
	{
		x: 0,
		y: 0,
		opacity: 0.1,
		duration: 1,
	},
	0.7
)

tl.to('.menu__item', {
	y: 0,
	opacity: 1,
	stagger: 0.1,
	duration: 1,
})

burger.addEventListener('click', () => {
	tl.play().timeScale(1)
})

closeMenu.addEventListener('click', () => {
	tl.timeScale(2)
	tl.reverse()
})

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		tl.timeScale(2)
		tl.reverse()
	})
})
