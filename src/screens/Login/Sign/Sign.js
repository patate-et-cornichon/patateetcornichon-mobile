import React from 'react'
import { View } from 'react-native'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import Text from '../../../components/Text/Text'
import styles from './styles'
import { facebookLogin, googleLogin } from '../../../utils/social-auth'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

export default class Sign extends React.Component {
  state = {
    email: 'kevinbarralon@gmail.com',
    password: 'Nephilim77',
    first_name: 'Kevin',
    disabled: false,
    accountLoading: false
  }

  async _accessAccount (origin) {
    const {
      actions: {
        createUser,
        loginUser,
        loginRequest
      },
      isConnected,
      components: {toast},
      navigation
    } = this.props
    const {target} = this.props.navigation.state.params
    let token, email, password, firstName

    if (!isConnected) {
      return toast.show('error', 'Tu es hors ligne !')
    }

    /* If the origin is facebook, google or native */
    if (origin === 'facebook') {
      token = await facebookLogin()
    } else if (origin === 'google') {
      token = await googleLogin()
    } else {
      email = this.state.email
      password = this.state.password
      firstName = this.state.first_name

      /* Validations */
      if (email === '' || password === '' || (target === 'create' && firstName === '')) {
        return toast.show('error', 'Des champs sont manquants :-)')
      } else if (!isEmail(email)) {
        return toast.show('error', 'L\'email n\'est pas valide')
      } else if (!isLength(password, {min: 5})) {
        return toast.show('error', 'Mot de passe de 5 caractères')
      }
    }

    this.setState({
      disabled: true,
      accountLoading: true
    })

    try {
      /**
       * If target is an account creation, request to the API User creation
       * We try to get the user's token if the target is login
       */
      if (target === 'create') {
        await createUser({origin, token, email, password, 'first_name': firstName})
      } else {
        await loginUser({origin, token, email, password})
      }

      /* Log the user */
      await loginRequest()
      return navigation.navigate('Main')
    } catch (e) {
      this.setState({
        disabled: false,
        accountLoading: false
      })
      return toast.show('error', e.message)
    }
  }

  render () {
    const {email, password, firstName, disabled, accountLoading} = this.state
    const {target} = this.props.navigation.state.params
    const socialTarget = target === 'create' ? 'S\'inscrire' : 'Se logger'

    return (
      <View style={styles.signProcessContainer}>
        {/* Sign Wrapper */}
        <View style={styles.signWrapper}>

          {/* Social connection */}
          <Button text={`${socialTarget} avec Facebook`}
            color='facebook'
            width='80%'
            fontSize='14'
            style={{marginBottom: 20}}
            onPress={() => this._accessAccount('facebook')}
          />

          <Button text={`${socialTarget} avec Google`}
            color='google'
            width='80%'
            fontSize='14'
            onPress={() => this._accessAccount('google')}
          />

          {/* Alternative connection */}
          <Text style={styles.emailAlternativeText}>ou avec ton email</Text>

          {/* Prénom */}
          {
            target === 'create' &&
            <Input
              style={{marginBottom: 15}}
              placeholderColor='#88939a'
              icon='mood'
              placeholder='Prénom'
              width='100%'
              keyboardAppearance='dark'
              onChangeText={(firstName) => this.setState({firstName: firstName})}
              value={firstName}
            />
          }

          {/* Email */}
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            icon='email'
            keyboardType='email-address'
            placeholder='Email'
            width='100%'
            keyboardAppearance='dark'
            onChangeText={(email) => this.setState({email})}
            value={email}
          />

          {/* Password */}
          <Input
            style={{marginTop: 15, marginBottom: 25}}
            autoCapitalize='none'
            icon='vpn-key'
            placeholder='Mot de passe'
            secureTextEntry
            width='100%'
            keyboardAppearance='dark'
            onChangeText={(password) => this.setState({password})}
            value={password}
          />

          {/* Create account */}
          <Button text={target === 'create' ? 'Créer un compte' : 'S\'identifier'}
            color='primary'
            disabled={disabled}
            fontSize='14'
            onPress={() => this._accessAccount('native')}
            loading={accountLoading}
          />
        </View>
      </View>
    )
  }
}
