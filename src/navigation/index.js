import { StackNavigator } from 'react-navigation'
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'

const AppNavigator = StackNavigator(
  {
    PublicRoutes: {
      screen: PublicRoutes
    },
    PrivateRoutes: {
      screen: PrivateRoutes
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      shadowColor: 'transparent'
    }
  }
)

export default AppNavigator
