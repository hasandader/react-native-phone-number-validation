import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { PhoneInput } from 'react-native-phone-number-validation';

export default function App() {
  return (
    <View style={styles.container}>
      <PhoneInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
