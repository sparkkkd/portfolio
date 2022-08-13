import AOS from 'aos'
import { debounce } from 'underscore'

/* ************** AOS scroll ************** */
AOS.init({
	offset: 50,
	duration: 1000,
})

/* ************** Links scroll ************** */
linksScroll()

function linksScroll() {
	const anchors = document.querySelectorAll('.scroll-href')

	anchors.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()

			const blockID = item.dataset.scroll

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	})
}
