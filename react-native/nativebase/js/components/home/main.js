
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Title, Text, Button, Icon } from 'native-base';

import * as drawerActions from '../../actions/drawer';
import * as routeActions from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

const backgroundTop = require('../../../images/bg-2.png');

class Main extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    goBack: React.PropTypes.func,
    escolaSabatina: React.PropTypes.object
  }

  render() {
    const { escolaSabatina: { hoje, semana, licoes } } = this.props;
    const { versoAureo } = licoes[semana.licao];
    const licaoHoje = licoes[semana.licao].dias[hoje.dia];

    return (
      <View>
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
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    escolaSabatina: state.escolaSabatina,
  };
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    openDrawer: drawerActions.openDrawer,
    goBack: routeActions.popRoute,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
