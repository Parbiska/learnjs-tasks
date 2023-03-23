const fib = (n) => {
	let a = 1,
		b = 1

	for (let i = 3; i <= n; i++) {
		const c = a + b
		a = b
		b = c
	}

	return b
}
