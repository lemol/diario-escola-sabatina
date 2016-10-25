
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  mt: {
    marginTop: 20,
  },
  text: {
    color: '#333333ff',
    bottom: 10,
  },
  textoLicaoContainer: {
    fontWeight: 'bold',
    color: '#bbaaeedd',
    backgroundColor: '#ffffffaa',
    marginTop: 10,
    padding: 10,
  },
  numeroLicao: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#535353aa',
    fontFamily: 'monospace',
  },
  tituloLicaoContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    width: 300,
    borderColor: '#333a',
  },
  versoAureo: {
    backgroundColor: '#ffffffaa',
    padding: 10,
    width: 300,
    borderColor: '#333a',
  },
  bgTop: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});
