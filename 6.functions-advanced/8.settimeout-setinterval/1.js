const printNumbers = (from, to) => {
	let current = from

	const timerId = setInterval(() => {
		console.log(current)
		if (current === to) clearInterval(timerId)
		current++
	}, 1000)
}

const printNumbersRecursion = (from, to) => {
	let current = from

	setTimeout(function func() {
		console.log(current)
		if (current < to) {
			setTimeout(func, 1000)
		}
		current++
	}, 1000)
}
