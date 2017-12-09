import moment from 'moment/min/moment-with-locales'

export default class Moment {
  static transform (date, format) {
    moment.locale('fr')

    switch (format) {
      case 'short date':
        return moment(date).format('L')
      case 'full date':
        return moment(date).format('DD MMMM YYYY')
      case 'humanize':
        let dateNow = new Date()
        dateNow.setDate(dateNow.getDate() - 1)
        return new Date(date) < dateNow ? `Le ${moment(date).format('DD MMMM YYYY')}` : moment(date).fromNow()
      default:
        return null
    }
  }
}
