import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: { marginBottom: 16 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ClickCount = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label} testID="counter">
        `You clicked the button {counter} times`
      </Text>
      <Button
        testID="button"
        onPress={() => setCounter(counter + 1)}
        title="Press me"
      />
    </View>
  );
};
export default ClickCount;
