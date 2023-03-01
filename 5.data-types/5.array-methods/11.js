const getAverageAge = (users) =>
	users.reduce((prev, user) => prev + user.age, 0) / users.length
