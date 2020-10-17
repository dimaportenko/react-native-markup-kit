import * as React from 'react';
import { Constants, View, Text } from '../../src';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(Constants.windowWidth);
  }, []);

  return (
    <View flex center bg-blue30>
      <Text white>Window Width: {result}</Text>
      <Text white>Window Height: {Constants.windowHeight}</Text>
    </View>
  );
}
