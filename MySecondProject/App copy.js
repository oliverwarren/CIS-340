import React from 'react';
import { Text, TextInput, view } from 'react-native';

export default function MyApp() { 
  
  return (
    <view>
      <Text>
      Hello I am a student in CIS340!
      </Text>
    </view>
  
  );
}

export default function MuliComp(){
  return(
    <view style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'Center'
    }}> 
      <text> Welcome to my class </text>
      <myApp />
      <myApp />
      <myApp />
      <myApp />
    </view>
  )
}

