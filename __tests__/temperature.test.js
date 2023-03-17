const code = require('../Conversions/temperature')

describe('Temperature Tests', () => {
	test('23 C to F', () => {
		expect(code.celciusToFehrenheit(23)).toBe(3)
	})
})