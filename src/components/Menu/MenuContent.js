import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Text from '../Text/Text'
import styles from './styles'
import Avatar from '../Avatar/Avatar'

const MenuItem = ({text, onPress, icon}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.menuItemView}>
      {
        icon &&
        <MaterialIcons style={styles.menuItemIcon} name={icon} size={24} />
      }
      <Text style={styles.menuItemText}>
        {text}
      </Text>
    </View>
  </TouchableWithoutFeedback>
)

const MenuContent = ({user, components: {menu}, actions, navigation}) => {
  const _closeMenu = (func, animate) => {
    menu.close(animate)
    return func
  }

  const _logout = () => _closeMenu(actions.logout(), true)

  const _goToRoute = routeName => _closeMenu(navigation.navigate(routeName), true)

  return (
    <View style={styles.menuContentContainer}>

      {/* User infos */}
      <Avatar uri={user.avatar}
        style={styles.menuUserAvatar}
      />
      {
        user.first_name &&
        <Text style={styles.menuUserName}>
          {user.first_name}
        </Text>
      }
      <Text style={styles.menuUserEmail}>
        {user.email}
      </Text>

      <View style={styles.menuItemsList}>
        <MenuItem onPress={() => _goToRoute('Profile')}
          text='Mon profil'
          icon='face'
        />

        <MenuItem onPress={() => _logout()}
          text='Se déconnecter'
          icon='exit-to-app'
        />
      </View>

      <View style={styles.extraMenu}>
        <MenuItem onPress={f => f}
          text='À propos'
        />
      </View>
    </View>
  )
}

export default MenuContent
