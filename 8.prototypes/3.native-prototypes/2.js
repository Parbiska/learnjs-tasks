Function.prototype.defer = function (ms) {
	const func = this
	return (...args) => setTimeout(() => func.apply(this, args), ms)
}

function f(a, b) {
	console.log(a + b)
}

f.defer(1000)(1, 2)
