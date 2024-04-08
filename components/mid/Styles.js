import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({

  centerBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },

    containermaps: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'flex-and',
    },
    maps: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  
  export default styles;