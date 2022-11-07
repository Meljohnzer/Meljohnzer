import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from 'react-native'
import React from 'react'

const Homescreen = ({navigation}) => {

  return(
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingHorizontal: 40,
    
    }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Homescreen</Text>
    </View>
  );
};

export default Homescreen