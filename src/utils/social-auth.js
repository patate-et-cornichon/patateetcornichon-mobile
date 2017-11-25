import {Facebook, Google} from 'expo';
import settings from '../config/settings';

export async function facebookLogin() {
  try {
    const {type, token} = await Facebook.logInWithReadPermissionsAsync(settings.facebookID, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      return token;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
}

export async function googleLogin() {
  try {
    const {type, accessToken} = await Google.logInAsync({
      androidClientId: settings.androidGoogleID,
      iosClientId: settings.iOSGoogleID,
      scopes: ['profile', 'email'],
    });
    if (type === 'success') {
      return accessToken;
    }
    return null
  } catch (err) {
    console.log(err);
  }
}