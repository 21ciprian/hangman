console.log('linked')
const cities = [
	'LONDON',
	'BIRMINGHAM',
	'LEEDS',
	'GLASGOW',
	'EDINBURGH',
	'LIVERPOOL',
	'MANCHESTER',
	'BRISTOL',
	'CARDIFF',
	'BELFAST',
	'BRIGHTON',
	'WESTMINSTER',
	'YORK',
	'CAMBRIDGE',
	'OXFORD',
]
let city = ''
let failedAttemps = 6
let mistakes = 0
let guessedLettersArray = []
let cityName = null
let message = document.querySelector('#keyboard')

const wordGenerator = () => {
	city = cities[Math.floor(Math.random() * cities.length)]
}
const keyboardGenerator = () => {
	let keyboard = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		.split('')
		.map(
			key =>
				`
      <button
        class="btn"
        id='` +
				key +
				`'
        onClick="handleGuess('` +
				key +
				`')"
      >
        ` +
				key +
				`
      </button>
    `
		)
		.join('')

	document.querySelector('#keyboard').innerHTML = keyboard
}
