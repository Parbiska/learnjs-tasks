const inBetween = (a, b) => (num) => {
	for (let i = a; i <= b; i++) {
		if (num === i) {
			return true
		}
	}
}

const inArray = (arr) => (num) => arr.includes(num)

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(3, 6)))

console.log(arr.filter(inArray([1, 2, 10])))
