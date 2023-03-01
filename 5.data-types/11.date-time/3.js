const getLocalDay = (date) => {
	const day = date.getDay()

	return day === 0 ? 7 : day
}
