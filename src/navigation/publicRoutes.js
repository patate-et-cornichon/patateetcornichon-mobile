import { StackNavigator } from 'react-navigation'
import Login from '../containers/Login'
import Sign from '../containers/Sign'
import { defaultBackground } from '../config/styles'

const PublicRoutes = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Sign: {
      screen: Sign
    }
  },
  {
    mode: 'modal',
    cardStyle: {
      backgroundColor: defaultBackground
    }
  }
)

export default PublicRoutes
