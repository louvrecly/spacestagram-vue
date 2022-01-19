import moment from 'moment'

const oldestStartDate = '2021-01-01' // oldest available start date: '1995-06-16'
const defaultNumOfPosts = 14

export function validateStartDate(startDate) {
  return startDate && moment(startDate).isBetween(oldestStartDate, undefined, 'day', '[]')
    ? startDate
    : moment().subtract(defaultNumOfPosts, 'days').format('YYYY-MM-DD')
}
