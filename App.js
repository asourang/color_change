//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 

//Create custom components
const App = () => {

  //Declare variable
  //var counter = 0;
  const [colorChange, setColor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color:colorChange}}>New Color</Text>
      <Button   title="Change Color"
      onPress={()=>{

        setColor( 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
        console.log(colorChange);
      }}
      />
      
      
      <StatusBar style="auto" />
    </View>
  );
}

//Export 
export default App;

//Apply Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
