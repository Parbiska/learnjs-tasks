let login
let message

message =
	login === 'Сотрудник'
		? 'Привет'
		: login === 'Директор'
		? 'Здраствуйте'
		: login === ''
		? 'Нет логина'
		: ''
