const getSecondsToday = () => {
	const date = new Date()
	return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
}
