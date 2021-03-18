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

const determineSeniority = function (yearsOfExperience) {
  if (
    typeof yearsOfExperience !== 'number'
    || yearsOfExperience < 0
  ) throw new Error("parameter must be a positive number.")

  switch (true) {
    case (yearsOfExperience === 0):
      return "student"
    case (yearsOfExperience > 0 && yearsOfExperience <= 3):
      return "junior"
    case (yearsOfExperience > 3 && yearsOfExperience <= 5):
      return "mid-level"
    case (yearsOfExperience > 5 && yearsOfExperience <= 10):
      return "senior"
    case (yearsOfExperience > 10):
      return "expert"
  }
}

module.exports = {
  dayNumberToDayName,
  determineSeniority,
}
