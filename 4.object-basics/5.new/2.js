function Accumulator(startingValue) {
	this.value = startingValue
	this.read = function (num) {
		this.value += num
	}
}
