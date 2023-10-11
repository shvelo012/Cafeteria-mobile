import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LogInScreen';
import HomeAdminScreen from './Screens/HomeAdminScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from './Screens/screenConstants';
import { NavigationContainer } from './Navigation/NavigationContainer';


const stack = createNativeStackNavigator();

const MainContainer: React.FC = () => {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName={Screens.HomeScreenName}>
        <stack.Screen name={Screens.HomeScreenName} component={HomeScreen} options={{ headerShown: false }} />
        <stack.Screen name={Screens.LoginScreenName} component={LoginScreen} options={{ headerShown: false }} />
        <stack.Screen name={Screens.HomeAdminScreenName} component={HomeAdminScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
