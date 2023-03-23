const debounce = (f, ms) => {
	let isCooldown = false

	return function (...args) {
		if (isCooldown) return

		isCooldown = true

		setTimeout(() => (isCooldown = false), ms)

		return f.apply(this, args)
	}
}
