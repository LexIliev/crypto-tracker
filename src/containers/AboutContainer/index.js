import React, { Component } from 'react';
import { Linking, Text, Image, View } from 'react-native';

import styles from './styles';

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#1B242F',
      borderBottomColor: '#009CB4',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      color: '#fff',
    },
  };

  render() {
    const { container, logo, title, subTitle, link } = styles;
    return (
      <View style={container}>
        <Image
          resizeMode="contain"
          style={logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={title}>Hi! I'm Alex!</Text>
        <Text style={subTitle}>
          Check the repo of the app on the link below.
        </Text>
        <Text
          style={link}
          onPress={() =>
            Linking.openURL('https://github.com/lexiliev')
              .then(() => console.log('calling'))
              .catch((err) => console.log('error: ', err))
          }
        >
          Click me!
        </Text>
      </View>
    );
  }
}

export default AboutContainer;
