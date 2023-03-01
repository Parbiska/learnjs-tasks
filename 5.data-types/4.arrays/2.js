const sumInput = () => {
	let result = 0

	const prompt = [1, 2, 3]

	for (const number of prompt) result += number

	return result
}

console.log(sumInput())
