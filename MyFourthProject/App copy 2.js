import React from 'react';
import { Text, View, FlatList} from 'react-native';
  

export default StatesApp = () => {

    return(
      <View style={{flex: 1, paddgTop:22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {key: 'Alaska'},
            {key: 'Arizona'},
            {key: 'California'},
            {key: 'Colorado'},
            {key: 'Delaware'},
            {key: 'Florida'},
            {key: 'Georgia'},
            {key: 'Hawaii'},
            {key: 'Idaho'},
            {key: 'Illinois'},
            {key: 'Arkansas'},
            {key: 'Indiana'},
            {key: 'Colorado'},
            {key: 'Iowa'},
            {key: 'kansas'},
            {key: 'Kentucky'},
            {key: 'Maine'},
          ]}
          returnItem={({item}) => <Text style ={{padding:10, fontSize:20, height: 44}}> {item.key} </Text>}
        /> 

      </View>

    );// end of return stmt

  }
