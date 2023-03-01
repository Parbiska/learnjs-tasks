const aclean = (arr) => {
	const obj = {}

	arr.forEach((el) => {
		const sorted = el.toLowerCase().split('').sort().join('')
		obj[sorted] = el
	})

	return Object.values(obj)
}
