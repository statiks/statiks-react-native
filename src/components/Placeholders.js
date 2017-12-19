import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import g from 'styles/global';
import v from 'styles/variables';
import { navigatorTypes } from 'utils/types';

import { SETTINGS } from '../screens';

const { width } = Dimensions.get('window');

class Empty extends PureComponent {

  static propTypes = {
    ...navigatorTypes,
  }

  handlePress = () => {
    this.props.navigator.push({ screen: SETTINGS });
  }

  render() {
    return (
      <View style={[g.layout, s.container]}>
        <Image
          style={s.container__illustration}
          source={require('../assets/images/welcome-illu.png')}
        />

        <View>
          <Text style={s.container__title}>{'Welcome to statiks'.toUpperCase()}</Text>

          <Text style={s.container__paragraph}>
            Hey buddy, you are ready to go ! Let’s add your networks
            and see the differents stats for each of them.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          style={s.empty__button}
          onPress={this.handlePress}
        >
          <Text style={s.empty__buttonText}>Let’s start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Error extends PureComponent {

  render() {
    return (
      <View style={[g.layout, s.error]}>
        <Image
          style={s.container__illustration}
          source={require('../assets/images/error-illu.png')}
        />

        <View>
          <Text style={s.container__title}>{'There is a problem!'.toUpperCase()}</Text>

          <Text style={s.container__paragraph}>
            I’m so sorry buddy, but something went wrong! Keep calm and reload the app.
          </Text>

          <Text style={s.container__paragraph}>
            Hit me up at <Text style={s.error__link} onPress={() => Linking.openURL('https://twitter.com/JeremDsgn')}>@JeremDsgn</Text> if issues remaining.
          </Text>
        </View>
      </View>
    );
  }
}

class Loading extends PureComponent {

  static propTypes = {
    description: PropTypes.string,
  }

  render() {
    const { description } = this.props;

    return (
      <View style={[g.layout, s.container]}>
        <Image
          style={s.loading__illustration}
          source={require('../assets/images/emoji-loading.gif')}
        />

        <Text style={s.loading__paragraph}>{description}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container__illustration: {
    alignSelf: 'center',

    marginLeft: -14,

    width: 275,
    height: 159,
  },

  container__title: {
    marginTop: 60,

    fontFamily: v.dinBold,
    fontSize: 16,
    color: v.dark,
    letterSpacing: 2,
    textAlign: 'center',
  },

  container__paragraph: {
    marginTop: 20,
    paddingHorizontal: 50,

    fontFamily: v.din,
    fontSize: 14,
    color: v.lightBlue,
    lineHeight: 22,
    textAlign: 'center',
  },

  empty__button: {
    alignSelf: 'center',

    marginTop: 40,

    width: width / 2,

    backgroundColor: v.buttonGreen,
    borderRadius: 4,
  },

  empty__buttonText: {
    paddingVertical: 18,

    color: '#fff',
    fontSize: 16,
    fontFamily: v.dinMedium,
    textAlign: 'center',

    backgroundColor: 'transparent',
  },

  error: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  error__link: {
    fontFamily: v.dinMedium,
    color: v.green,
  },

  loading__illustration: {
    alignSelf: 'center',

    marginLeft: 0,
    marginTop: 320,

    width: 80,
    height: 97,
  },

  loading__paragraph: {
    textAlign: 'center',

    marginTop: 20,
    paddingHorizontal: 115,

    fontFamily: v.din,
    fontSize: 14,
    color: v.lightBlue,
    lineHeight: 22,
  },
});

export {
  Empty,
  Error,
  Loading,
};