import { infoColor, primaryColor, secondaryColor } from '../../config/styles'

const abstract = {
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 40
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'roboto',
    letterSpacing: 2
  }
}

const styles = {
  buttonPrimary: {
    ...abstract.button,
    backgroundColor: primaryColor
  },
  buttonTextPrimary: {
    ...abstract.buttonText,
    color: '#ffffff'
  },
  buttonSecondary: {
    ...abstract.button,
    backgroundColor: secondaryColor
  },
  buttonTextSecondary: {
    ...abstract.buttonText,
    color: primaryColor
  },
  buttonFacebook: {
    ...abstract.button,
    backgroundColor: '#3B5998'
  },
  buttonTextFacebook: {
    ...abstract.buttonText,
    color: '#ffffff'
  },
  buttonGoogle: {
    ...abstract.button,
    backgroundColor: '#ea4335'
  },
  buttonTextGoogle: {
    ...abstract.buttonText,
    color: '#ffffff'
  },
  buttonInfo: {
    ...abstract.button,
    backgroundColor: infoColor
  },
  buttonTextInfo: {
    ...abstract.buttonText,
    color: '#ffffff'
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
}

export default styles
