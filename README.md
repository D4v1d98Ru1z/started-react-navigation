# React Navigation - Getting started! 😎

**In this article**, we are going to understand the **basic concepts** of this popular library and how to make your React Native apps more **scalable with navigation.**

> The resources of this tutorial are available on my [GitHub](https://github.com/D4v1d98Ru1z) repository. Feel free to fork it and try on your own.🚀

### Index
- What is React Navigation?
- Hello World with React Navigation
- Where go from here

# What is React Navigation?

React Navigation is a library that was born from the **need to creating navigations** into our React Native apps. As we know in mobile environments there are a lot of ways to navigate into different views, and we can choose what kind of navigation or animation we are going to need. **As native platforms do.** 

This **JavaScript-based** navigation library **uses native drivers** for fluid transitions. Also, React Navigation adopts this approach that avoids any required knowledge in Objective C, Swift,  Java, Kotlin, allowing you to focus more on the app experience.

# Hello World with React Navigation

In this section, we are going to create a very simple Hello World app on React Native with the purpose of learning how to use React Navigation in a simpler way.

Before to start let's init a React Native project using the React Native CLI. 

``` bash
react-native init easyReactNavigation
```

Inside of the project that was created it's time to install the React Navigation into our `package.json` file.

``` bash
npm install -S react-navigation

# Then install the gesture handler.
npm install -S react-native-gesture-handler

# Link the native dependencies.
react-native link react-native-gesture-handler

```

Next, configure a basic root component using React Navigation. To make it real, you need to import the `createStackNavigator` which is a function that returns a React Component in this case, the class `App`, where is exported directly from the `App.js`.


``` react
import { createStackNavigator, createAppContainer } from 'react-navigation'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Navigation!</Text>
      </View>
    )
  }
}
// Create Stack Navigator gets two props createStackNavigator(routes, config)
const AppNavigator = createStackNavigator({
  Home: App
})
// Container of the app
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer


```
Run this code and you are going to get a very nice view with a greeting text in the middle of the screen. But, with a little difference, as you can see there is a header. This header is provided by default from the Stack Navigator. 

![Welcome react navigation](https://thepracticaldev.s3.amazonaws.com/i/w0n23z6kxio7pahqyxjz.png)

### Navigating through views

To create a new view in React Navigation is just that simple like create a new React component with the content. In this exercise, we create a class component with just a simple and flat text in the middle of the screen.

``` react
class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!🤓</Text>
      </View>
    )
  }
}
```

In the Home view let's do a button which has an event that is going to redirect to a new view. For this, let's create a method for onPress event which is in charge to use the navigation props to go to the new view.

``` react
class App extends React.Component {
  // On Press event 
  onPress = () => {
    // Navigate to the HelloWorld view
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
    )
  }
}
```

Don't forget to import the new view into the Stack Navigator.

``` react
const AppNavigator = createStackNavigator({
  Home: App,
  HelloWorld
})
```
> **The Stack Navigator** provides a transition between screens were each new screen is placed on the top of the stack and it works exactly like a call stack. 

Finally, here's the final result! 🎉

![final app result](https://media.giphy.com/media/fV8KNoIllOgikN62G1/giphy.gif)



# Where go from here

This article was just a simple started into the huge library that is React Navigation. You can take a pretty cool look to the [official documentation](https://reactnavigation.org/docs/en/getting-started.html). Also, you can follow me here on dev.to as well as on [Instagram](https://www.instagram.com/davidlecodes/) and [Twitter](https://twitter.com/davidlecodes)!