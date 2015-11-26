var assert = require('assert')
var MathLib = require('../MathLib')

describe('MathLib', () => {

	beforeEach(() => {
		console.log('setting up for the test')
	})

	afterEach(() => {
		console.log('cleaning up after the test')
	})

	it('#add returns the sum of two integers', () => {

		var sum = MathLib.add(2, 2)
		console.log(`the add sum is ${sum}`)

		assert.strictEqual(sum, 4)
	})

	it('#longAdd returns the sum in a callback function', done => {

		MathLib.longAdd(2,2, sum => {
			console.log(`the longAdd sum is ${sum}`)
			assert.strictEqual(sum, 4)
			done()
		})
	})

	it('#subtract returns the difference', () => {
		var difference = MathLib.subtract(5,3)

		assert.strictEqual(difference, 2)	
	})

	it('#divide should not accept zero as the denominator', () => {

		assert.throws(function() {
			MathLib.divide(10, 0)
		})
	})
})

