const dayNumberToDayName = function (number) {
  dayMap = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }

  return dayMap[number]
}

module.exports = dayNumberToDayName
