import React, { PropTypes } from 'react';
import { Header, Title, Text, Button, Icon } from 'native-base';

const AppHeader = function ({ title, goBack, openDrawer }) {
  return (
    <Header>
      <Button transparent onPress={goBack}>
        <Icon name="ios-arrow-back"/>
      </Button>
      <Title>{title}</Title>
      <Button transparent onPress={openDrawer}>
        <Icon name="ios-menu" />
      </Button>
    </Header>
    )
};

AppHeader.propTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func,
  goBack: PropTypes.func,
};

