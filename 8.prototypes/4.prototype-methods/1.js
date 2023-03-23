let dictionary = Object.create(null)

Object.defineProperty(dictionary, 'toString', {
	enumerable: false,
	value() {
		const arr = []

		for (const key in this) {
			arr.push(key)
		}

		return arr.join(', ')
	},
})

dictionary.apple = 'Apple'
dictionary.__proto__ = 'test'

for (let key in dictionary) {
	console.log(key)
}

console.log(dictionary.toString())
