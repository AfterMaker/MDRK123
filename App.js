import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Cap from './components/up/cap';
import Mid from './components/mid/mid';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Cap/>
      <Mid/>
    </View>
  );
}