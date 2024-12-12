import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login/login.jsx";
import CreateAccount from "../screens/createAccount/createAccount";

const Stack = createNativeStackNavigator();

function RoutesOpen(){
    return(
        <Stack.Navigator>

            <Stack.Screen name={"login"} component={Login} options={{headerShown: false}}/>

            <Stack.Screen name={"CreateAccount"} component={CreateAccount}/>

        </Stack.Navigator>
    )
}

export default RoutesOpen;