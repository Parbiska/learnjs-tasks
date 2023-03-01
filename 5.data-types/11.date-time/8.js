const formatDate = (date) => {
	const diff = new Date() - date

	if (diff < 1000) {
		return 'прямо сейчас'
	}

	const sec = Math.floor(diff / 1000)

	if (sec < 60) {
		return sec + ' сек. назад'
	}

	const min = Math.floor(diff / 60000)
	if (min < 60) {
		return min + ' мин. назад'
	}
	d = [
		'0' + date.getDate(),
		'0' + (date.getMonth() + 1),
		'' + date.getFullYear(),
		'0' + date.getHours(),
		'0' + date.getMinutes(),
	].map((component) => component.slice(-2))

	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}
