let login = 'Админ'

if (login === 'Админ') {
	let password = 'Я Главный'

	if (password === 'Я Главный') {
		console.log('Здраствуйте!')
	} else if (password === null || password === '') {
		console.log('Отменено')
	} else {
		console.log('Неверный пароль')
	}
} else if (login === null || login === '') {
	console.log('Отменено')
} else {
	console.log('Я вас не знаю')
}
