const filterRangeInPlace = (arr, a, b) => {
	arr.forEach((el, index) => {
		if (el < a || el > b) {
			arr.splice(index, 1)
		}
	})
}
