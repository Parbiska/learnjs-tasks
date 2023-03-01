const groupById = (arr) =>
	arr.reduce((obj, value) => {
		obj[value.id] = value
		return obj
	}, {})
