import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loader = ({ isLoading, textContent, textStyle, animation }) => (
  <View>
    <Spinner
      visible={isLoading}
      textContent={textContent}
      textStyle={textStyle}
      animation={animation}
    />
  </View>
);

Loader.defaultProps = {
  textContent: 'Loading...',
  textStyle: {
    color: '#253145',
  },
  animation: 'fade',
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
  textContent: PropTypes.string,
  textStyle: PropTypes.object,
  animation: PropTypes.string,
};

export default Loader;
