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

const printList = (list) => {
	if (!list.next) return console.log(list.value)

	console.log(list.value)
	printList(list.next)
}

const printListСycle = (list) => {
	let a = list

	while (a) {
		console.log(a.value)
		a = a.next
	}
}
