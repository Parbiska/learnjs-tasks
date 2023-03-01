function pow(x, n) {
	return x ** n
}

const x = 7
const n = 5

console.log(n < 1 ? `Степень ${n} не поддерживается` : pow(x, n))
