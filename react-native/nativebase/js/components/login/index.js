
import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import { login } from '../../actions/user';
import styles from './styles';

const logo = require('../../../images/logo-escola-sabatina.png');
const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    login: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.props.login('lemolsoft');
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View/>
          <View>
            <Image source={logo} style={styles.logo}/>
          </View>
          <View>
            <Text>Escola Sabatina a Diário</Text>
          </View>
          <View>
              <Button bordered capitalize onPress={this.login}>
                Entrar
              </Button>
          </View>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    login: name => dispatch(login(name)),
  };
}

export default connect(null, bindActions)(Login);
