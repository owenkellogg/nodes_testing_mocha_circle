var assert = require('assert')
var MathLib = require('./MathLib')

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
})
