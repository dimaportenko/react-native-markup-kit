import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Constants, View } from 'react-native-markup-kit';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(Constants.windowWidth);
  }, []);

  return (
    <View>
      <Text>Result: {result}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
