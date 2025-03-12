;(() => {
	console.log('hello from chrome extensions template')

	const elements = document.querySelectorAll('a')
	for (const el of elements) {
		console.log(el.getAttribute('href'))
	}
})()
