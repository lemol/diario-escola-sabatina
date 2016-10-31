
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, H3, H2, H1, List, ListItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, popRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import theme from '../../themes/base-theme';
import styles from './styles';

import AppContainer from '../main/container'

class Semana extends Component {

  render() {
    const { escolaSabatina: { hoje, semana, licoes } } = this.props;
    const dias = _.values(licoes[semana.licao].dias);
    alert('Lemol');

    return (
      <List>
        {dias.map((d,i) => {
          return (
            <ListItem key={i}>
              <Text>{d.tema}</Text>
            </ListItem>
          )
        })}
      </List>
    );
  }

}

function bindAction(dispatch) {
  return {
  };
}

function mapStateToProps(state) {
  return {
    escolaSabatina: state.escolaSabatina,
  };
}

export default AppContainer(connect(mapStateToProps, bindAction)(Semana));
