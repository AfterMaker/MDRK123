import React from 'react';
import {FlatList, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import Styles from './Styles';
import FList from './Flatlist';



export default function Cap() {
    return (
      <View style={Styles.allBox}>
        <View style={Styles.backgroundImgBox}>
            <Image source={require('../../assets/Blue version 2.png')} style={Styles.backgraundImg}/>
        </View>

        <View style={Styles.centerBox}>

            <View style={Styles.LogoBox}>
              <Image source={require('../../assets/Logo.png')} style={Styles.Logos}/>
            <StatusBar style="auto" />
            </View>

            <FList/>


            <View style={Styles.StopkaBox}>
              <Image source={require('../../assets/Stopka.png')} style={Styles.Stopka}/>
              <StatusBar style="auto" />
            </View>

            <StatusBar style="auto" />
        </View>
      </View>
    );
  }
