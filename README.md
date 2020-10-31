# react-native-markup-kit
This is lightweight fork of [react-native-ui-lib](https://github.com/wix/react-native-ui-lib). I love the concept of theming and styling with modifiers. There is a lot of cool components in the react-native-ui-lib which required a lot of dependecies. In most cases I don't need those componets so I decided to make light version with basic compnents and no dependecies. 

## Installing
`npm install react-native-markup-kit`    
or    
`yarn add react-native-markup-kit`    
    
## Create your own Design System in 3 easy steps    
    
### Step 1
Load your foundations and presets (colors, typography, spacings, etc...)

```
// FoundationConfig.js

import {Colors, Typography, Spacings} from 'react-native-markup-kit';

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C'
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});

```

### Step 2
Set default configurations to your components

```
// ComponentsConfig.js

import {ThemeManager} from 'react-native-markup-kit';

ThemeManager.setComponentTheme('Text', {
    body: true, 
    textColor: true, 
});

```

### Step 3
Use it all together. 
Your configurations will be applied on uilib components so you can use them easily with [modifiers](https://github.com/troublediehard/react-native-markup-kit/wiki/MODIFIERS). 

```
// MyScreen.js

import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native-markup-kit';

const MyScreen: () => React$Node = () => {
  return (
    <View flex padding-page>
      <Text heading marginB-s4>My Screen</Text>
      <View center padding-card marginB-s4 bg-blue30>
        <Text body>This is an example card </Text>
      </View>

      <TouchableOpacity square>
        <Text body bg-primaryColor>Button</Text>
      </TouchableOpacity>
    </View>
  );
};
```
    
### Tutorials    
Here are few videos about lib usage [React Native Libraries Overview](https://www.youtube.com/playlist?list=PL97fL9DAn9Qx0eYiChcP9O-dqjWvuRh8a) 
