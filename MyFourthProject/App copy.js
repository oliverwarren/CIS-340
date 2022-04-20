import React, {Component, useState} from 'react';
import { Text, TestInput, View } from 'react-native';

export default function WordConverter(){
  const [Text, setText]=useState('');
  return (
    <View style={{padding: 60}}>
        <TextInput
        style={{height: 40}}
        placeholder="Input your text here!"
        onChangeText={text=> setText(text)}
        defaultValue={text}
        />
        <Text style ={{padding: 10, fontsize: 42}}>
          {text.split(' ').map((word) => word && '*').join(' ')}
        </Text>

    </View>
  );
}