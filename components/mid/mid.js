import React from 'react';
import Styles from './Styles';
import {Text, StatusBar, View, Image} from 'react-native';
import MapView from 'react-native-maps';

export default function Mid() {
    return (

      <View style={Styles.maps}>

        <Text>Я карта!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  //53.6894952877315, 88.05250834834504