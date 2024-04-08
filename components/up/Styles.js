import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({

    allBox: {
        backgroundColor: "#2e2e3f",
        width: '100%',
        height: '8%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    backgraundImg: {
        width: '100%',
        height: '160%',
    },
    backgroundImgBox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    centerBox: {
        backgroundColor: '#2f4661',
        width: '60%',
        height: '100%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    LogoBox: {
        width: '40%',
        height: '55%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: '25%',
        right: '20%',
    },
    Logos: {
        zIndex: 1,
        width: '100%',
        height: '100%',

    },
    StopkaBox: {
        width: '15%',
        height: '30%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: '-20%',
        left: '30%',
    },
    Stopka: {
        zIndex: 1,
        width: '100%',
        height: '100%',
    },

  });
  
  export default styles;