import * as React from 'react';
// import { Constants, View, Text, TouchableOpacity } from '../../src';
import { Constants, View, Text, TouchableOpacity } from 'react-native-markup-kit';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(Constants.windowWidth);
  }, []);

  return (
    <View flex center bg-blue30>
      <Text white>Window Width: {result}</Text>

      <TouchableOpacity>
        <Text white>Window Height: {Constants.windowHeight}</Text>
      </TouchableOpacity>

      <View
        height={100}
        width={100}
        bg-grey80
        marginT-20
        shadow50
      />
    </View>
  );
}
