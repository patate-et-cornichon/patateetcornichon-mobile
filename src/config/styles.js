import { Platform } from 'react-native'

export const headerHeight = Platform.OS === 'ios' ? 65 : 50

export const primaryColor = '#e5c014'
export const secondaryColor = '#172349'

export const fontColor = '#41484d'
export const placeholderColor = '#c6c6c6'

export const successColor = '#8bc34a'
export const errorColor = '#f44336'
export const pendingColor = primaryColor

export const defaultBackground = '#f9f9f9'
export const defaultBorderColor = '#e0e0e0'

export const defaultFontStyle = {
  fontSize: 17,
  lineHeight: 26,
  color: fontColor
}
