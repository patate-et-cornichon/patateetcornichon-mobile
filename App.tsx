import { AppLoading, Font, Icon } from 'expo';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import { store } from './store';

if (__DEV__) {
  import('./ReactotronConfig');
}

export default class App extends React.Component<{skipLoadingScreen: boolean}> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        // @ts-ignore
        <AppLoading
            startAsync={this.loadResourcesAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default'/>}
          <AppNavigator/>
        </View>
      </Provider>
    );

  }

  private async loadResourcesAsync(): Promise<void|any> {
    return Promise.all([
      Font.loadAsync({
        // Icon font
        ...Icon.Ionicons.font,
        // Other fonts
        'open-sans': require('./assets/fonts/open-sans-regular.ttf'),
        'delish-pro': require('./assets/fonts/delish-pro-narrow-sketch.ttf'),
      }),
    ]);
  }

  private handleLoadingError(error: Error): void {
    // Report error
    console.warn(error);
  }

  private handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
