import React from 'react'
import { Image, View } from 'react-native'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { Video } from 'expo'
import styles from './styles'

const videoSource = require('../../assets/videos/sign-background.mp4')
const logoSource = require('../../assets/images/logo.png')

const Login = ({navigation: {navigate}}) => {
  return (
    <View style={styles.signContainer}>
      {/* Background Video */}
      <Video
        shouldPlay
        isLooping
        isMuted
        resizeMode='cover'
        source={videoSource}
        style={styles.backgroundVideo}
      />

      {/* Get Logo */}
      <Image
        source={logoSource}
        style={styles.signLogo}
      />

      {/* Bottom content */}
      <View style={styles.signContent}>
        <Text style={styles.quote}>Miam.</Text>

        {/* SignUp */}
        <Button text="S'inscrire"
          color='primary'
          fontSize='18'
          onPress={() => navigate('Sign', {target: 'create'})}
        />

        <Text style={styles.alreadyUser}>Déjà inscrit ?</Text>

        {/* SignIn */}
        <Button text="S'identifier"
          color='secondary'
          fontSize='18'
          onPress={() => navigate('Sign', {target: 'login'})}
        />
      </View>

    </View>
  )
}

export default Login
