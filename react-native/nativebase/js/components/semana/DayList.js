
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, H3, H2, H1, List, ListItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { pushNewRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    pushNewRoute: React.PropTypes.func,
    escolaSabatina: React.PropTypes.object
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    const { escolaSabatina: { hoje, semana, licoes } } = this.props;
    const dias = _.values(licoes[semana.licao].dias);

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
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
    escolaSabatina: state.escolaSabatina,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
