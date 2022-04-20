import React from 'react';
import { Text, View, SectionList} from 'react-native';
  

export default StatesApp = () => {

    return(
      <View style={{flex: 1, paddgTop:22}}>
        <SectionList
          Sections={[
            {tile: 'A', date: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
            {tile: 'C', date: ['California', 'Colorado', 'Connecticut']},
            {tile: 'D', date: ['Delaware']},
            {tile: 'F', date: ['Florida']},
            {tile: 'G', date: ['Georgia']},
            {tile: 'H', date: ['Hawaii']},
          ]}
          renderItem={({item}) => <Text style ={{padding:10, fontSize:20, height: 44}}> {item.key} </Text>}
          renderSectionHeader={({section}) => <Text style={{paddingTop: 4,   
            paddingLeft: 10, 
            paddingRight: 10, 
            paddingBottom: 4,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: '9FA8DA'}}> {section.title} </Text> } //set you custmom color
            keyExtractor={(item, index) =>index}
        /> 
      </View>
    );// end of return stmt
  }
