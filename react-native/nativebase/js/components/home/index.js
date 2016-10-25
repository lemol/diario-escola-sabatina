
import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, H3, H2, H1, Card, CardItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import theme from '../../themes/base-theme';
import styles from './styles';

const backgroundTop = require('../../../images/bg-2.png');

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    escolaSabatina: React.PropTypes.object
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  render() {
    const { escolaSabatina: { hoje, semana, licoes } } = this.props;
    const { versoAureo } = licoes[semana.licao];
    const licaoHoje = licoes[semana.licao].dias[hoje.dia];

    return (
      <Container theme={theme} style={styles.container}>
        <Header>
          <Button transparent>
            <Icon name="ios-home"/>
          </Button>

          <Title>{'Escola Sabatina Diaria'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Image source={backgroundTop} style={styles.bgTop}>
            <View style={styles.textoLicaoContainer}>
              <Text style={styles.numeroLicao}>{`LIÇÃO #${semana.licao}`}</Text>
            </View>
            <View style={styles.versoAureo}>
              <Text>
                {versoAureo.texto}
              </Text>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list,
    escolaSabatina: state.escolaSabatina,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
