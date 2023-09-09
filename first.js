// The getDay() method of Date instances returns the day of the week for this date according to local time,
// const d = new Date()
// the new Date returns an object with so many properties
const date = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const utc = document.querySelector('[data-testid="currentUTCTime"]')

const UTCTime = new Date()
const UTCHours = UTCTime.getUTCHours()
const UTCMinutes = UTCTime.getUTCMinutes()
const UTCSeconds = UTCTime.getUTCSeconds()
 

const newDate = new Date()
const currentDayOfTheWeek = newDate.getDay()
const weekday = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

date.innerText= ` ${weekday[currentDayOfTheWeek]}`
utc.innerText = `${UTCHours}:${UTCMinutes}:${UTCSeconds} UTC`


 
