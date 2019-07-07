import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'


type Props = {};
class App extends Component<Props> {

  onPress = () => {
    this.props.navigation.navigate('HelloWorld')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to React Navigation!</Text>
        <Button 
          title="Tap me 😄"
          onPress={this.onPress}
        />
      </View>
    );
  }
}

// Hello World view
class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!🤓</Text>
      </View>
    )
  }
}
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
})

// Create Stack Navigator gets two props createStackNavigator(routes, config)
const AppNavigator = createStackNavigator({
  Home: App,
  HelloWorld
})

// Container of the app
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
