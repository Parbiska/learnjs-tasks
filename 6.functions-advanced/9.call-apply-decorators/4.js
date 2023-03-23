const throttle = (func, ms) => {
	let isThrottled = false,
		savedArgs,
		savedThis

	function wrapper(...args) {
		if (isThrottled) {
			savedArgs = args
			savedThis = this
			return
		}

		func.apply(this, args)

		isThrottled = true

		setTimeout(() => {
			isThrottled = false

			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = null
				savedThis = null
			}
		}, ms)
	}

	return wrapper
}
