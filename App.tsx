import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import CordinateScreen from './src/screens/cordinateScreen';
import CompareCordinate from './src/screens/compareCordinate';


const Stack = createNativeStackNavigator();
class App extends Component {
   render() {
       return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> 
            <Stack.Screen name="CordinateScreen" component={CordinateScreen} options={{ headerShown: false }} /> 
            <Stack.Screen name="CompareCordinate" component={CompareCordinate} options={{ headerShown: false }} /> 
            </Stack.Navigator>
        </NavigationContainer>
       );
   }
}

export default App;