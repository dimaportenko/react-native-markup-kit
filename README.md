# react-native-markup-kit
React Native components to simplify mark up

## Getting started

```
$ yarn add react-native-markup-kit  
// or  
$ npm install react-native-markup-kit --save
```

## Components
    
###Center
```
<Center>
    ...
</Center>
```
alternative to 
```
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
...
</View>
```

###Row
```
<Row>
    ...
</Row>
```
alternative to 
```
<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
...
</View>
```

###Spacer
Create space between Components could be alternative to margin style usage
```
<Spacer size={10} />
```