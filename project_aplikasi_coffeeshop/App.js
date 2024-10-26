import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Detail from './components/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: 'Coffee Menu',
            headerStyle: { backgroundColor: '#4A3728' },
            headerTintColor: '#ffffff'
          }} />
        <Stack.Screen name="Detail" component={Detail}
          options={{
            title: 'Coffee Details',
            headerStyle: { backgroundColor: '#4A3728' },
            headerTintColor: '#ffffff'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;