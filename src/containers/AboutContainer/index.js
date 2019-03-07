import React, { Component } from 'react';
/* eslint-disable object-curly-newline */
import { Linking, Text, Image, View } from 'react-native';
/* eslint-enable object-curly-newline */

import styles from './styles';

const logoImage = require('../../assets/images/logo.png');

class AboutContainer extends Component {
  // Header Styling
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
    const {
      container,
      logo,
      title,
      subTitle,
      link
    } = styles;

    return (
      <View style={container}>
        <Image
          resizeMode="contain"
          style={logo}
          source={logoImage}
        />
        <Text style={title}>Simple Crypto Tracker App</Text>
        <Text style={subTitle}>
          Check the repo of the app on the link below.
        </Text>
        <Text
          style={link}
          /* eslint-disable no-console */
          onPress={
            () => Linking.openURL('https://github.com/LexIliev/crypto-tracker')
              .then(() => console.log('Calling the URL'))
              .catch(err => console.log('Error: ', err))
          }
          /* eslint-enable no-console */
        >
          Click me!
        </Text>
      </View>
    );
  }
}

export default AboutContainer;
