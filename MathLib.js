
module.exports.add = (num1, num2) => {
	return num1 + num2
}

module.exports.subtract = (num1, num2) => {
	return num1 - num2
}

module.exports.longAdd = (num1, num2, callback) => {

	setTimeout(() => {
		callback(num1 + num2)
	}, 500)
}
