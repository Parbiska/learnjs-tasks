const unique = (arr) => {
	const result = []

	for (const str of arr) {
		if (!result.includes(str)) {
			result.push(str)
		}
	}

	return result
}
