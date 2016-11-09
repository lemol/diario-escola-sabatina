import React, { Component } from 'react';
import { Text, Button, Icon, H3, H2, H1, List, ListItem } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './styles';

import DayListItem from './DayListItem';

export default class DayList extends Component {

  static propTypes = {
    openDay: React.PropTypes.func,
    escolaSabatina: React.PropTypes.object
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    const {
      escolaSabatina: { hoje, semana, licoes },
      openDay
    } = this.props;

    const dias = _.values(licoes[semana.licao].dias);

    return (
      <List>
        {dias.map((d, i) => <DayListItem key={i} dia={d} openDay={openDay} />)}
      </List>
    );
  }
}
