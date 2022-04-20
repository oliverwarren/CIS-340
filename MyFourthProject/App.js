import React from 'react';
import { Text, Image, ScrollView} from 'react-native';

  const dog = {
    uri: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png',
    width: 64,
    height: 64
  };

export default MyScrollViewApp = () => (
    
    <ScrollView style={{padding: 40}}>
      <Text style ={{fontSize: 80}}> Try to scroll down </Text>
      <Image source={require('./assets/dog.png')} style ={{widthe: 64, height: 64}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style ={{fontSize: 80}}> Try to scroll down MORE </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style ={{fontSize: 80}}> Try to scroll down EVENNNNN MORE </Text>
      </ScrollView>
  );
