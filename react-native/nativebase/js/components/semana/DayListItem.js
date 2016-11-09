
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Button, Icon, H3, H2, H1, List, ListItem } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import styles from './styles';

export default function({ dia: { tema, data }, openDay, key}) {
  return (
    <ListItem key={key}>
      <Grid>
        <Row>
          <Col size={1}>
            <Row><Text>AA</Text></Row>
            <Row><Text>{data}</Text></Row>
            <Row><Text>BB</Text></Row>
          </Col>
          <Col size={4} style={{ justifyContent: 'center'}}>
            <Text style={styles.itemTema}>{tema.toUpperCase()}</Text>
          </Col>
        </Row>
      </Grid>
    </ListItem>
  );
}
