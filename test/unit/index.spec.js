const dayNumberToDayName = require('../../src/index')

test("First day of week is Monday", () => {
  expect(dayNumberToDayName(1)).toBe("Monday")

})
