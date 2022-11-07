
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/views/screens/Loginscreen';
import Signupscreen from './src/views/screens/Signupscreen';
import Homescreen from './src/views/screens/Homescreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name='Signupscreen'
      component={Signupscreen}
      />
    <Stack.Screen 
      name='Loginscreen'
      component={Loginscreen}
      />
    <Stack.Screen 
      name='Homescreen'
      component={Homescreen}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

