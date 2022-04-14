import React from 'react';
import { Text, TextInput, view } from 'react-native';

export default function MyApp() { 
  
  return (
    <view>
      <Text>
      {"\n\n\n\n\n\n"} 
      Hello I am a student in CIS340! {"\n"}
      </Text>
      <TextInput
      style={{
        height: 40,
        borderColor: "Gray",
        borderWigth: 1
      }}
      />
    </view>
  
  );
}


