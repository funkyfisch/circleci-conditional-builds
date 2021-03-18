const { dayNumberToDayName, determineSeniority } = require('../../src/index')

test("First day of week is Monday", () => {
  expect(dayNumberToDayName(1)).toBe("Monday")

})

test("Person with 7 years of experience is considered senior", () => {
  expect(determineSeniority(7)).toBe("senior")

})
