let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

const printReverseList = (list) => {
	if (!list.next) return console.log(list.value)

	printReverseList(list.next)
	console.log(list.value)
}

const printReverseListCycle = (list) => {
	const arr = []
	let a = list

	while (a) {
		arr.push(a.value)
		a = a.next
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i])
	}
}
