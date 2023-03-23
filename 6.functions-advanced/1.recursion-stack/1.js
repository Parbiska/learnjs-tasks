const sumToCycle = (num) => {
	let result = 0

	while (num >= 1) {
		result += num--
	}

	return result
}

const sumToRecursion = (num) => {
	if (num === 1) return 1

	return num + sumToRecursion(--num)
}

const sumTo = (num) => ((2 + (num - 1)) * num) / 2
