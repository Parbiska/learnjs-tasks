const getSecondsToTomorrow = () => {
	const currentDate = new Date()
	const totalSecondsToday =
		currentDate.getHours() * 3600 +
		date.getMinutes() * 60 +
		date.getSeconds()

	return 86400 - totalSecondsToday
}
