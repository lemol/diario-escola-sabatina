
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'stretch',
    resizeMode: 'cover',
    height: deviceHeight / 4.5,
    width: deviceWidth / 1.5,
  },
});
