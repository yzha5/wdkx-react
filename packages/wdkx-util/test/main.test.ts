const { CalcRadius } = require('../lib/cjs/index.js')

test('Test CalcRadius function', function () {
    const result = CalcRadius('bit', 2.5)
    expect(result).toBe(0.3125)
})
