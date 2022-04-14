import React from 'react';
import { Text, TextInput, view } from 'react-native';

function Student() {
  return (
    <View>
      <Text>Hey my name is {props.name}, I am a student in CIS 340!</Text>
    </View>
  );
}

  export default function MultiComp(){
    return(
      <View style ={{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
      }}>
        <Text>Welcome to CIS340</Text>
        <Student name="Oliver Warren"/>
        <Student name="Connor Gravelding"/>
        <Student name="Jacob Jackson"/>
        <Student name="Alex Lynch"/>
      </View>

    );
  }



