const spy = (func) => {
	function wrapper(...args) {
		console.log(this)
		wrapper.calls.push(args)
		return func.apply(this, args)
	}

	wrapper.calls = []

	return wrapper
}
