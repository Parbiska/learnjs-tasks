const makeCounter = () => {
	let count = 0

	const counter = () => count++

	counter.set = (newValue) => (count = newValue)

	counter.decrease = () => count--

	return counter
}

const counter = makeCounter()

console.log(counter.set(10))
