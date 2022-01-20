import moment from 'moment'

const oldestStartDate = '2021-01-01' // oldest available start date: '1995-06-16'
const defaultNumOfPosts = 14

export function validateDateRange({ startDate, endDate }) {
  return startDate && moment(startDate).isBetween(oldestStartDate, endDate, 'day', '[]')
    ? { startDate, endDate }
    : {
      startDate: moment(endDate).subtract(defaultNumOfPosts, 'days').format('YYYY-MM-DD'),
      endDate
    }
}

export function getNextDateRange (oldStartDate) {
  const endDate = moment(oldStartDate).subtract(1, 'days').format('YYYY-MM-DD')
  const startDate = moment(endDate).subtract(defaultNumOfPosts, 'days').format('YYYY-MM-DD')
  return { startDate, endDate }
}
