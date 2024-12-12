import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from '../../constants/icon.js'

import AbaHome from "../abaHome/abaHome.jsx";
import AbaCalendar from "../abaCalendar/abaCalendar.jsx";
import AbaProfile from "../abaProfile/abaProfile.jsx";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

function Main() {
    return (
            <Tab.Navigator>

                <Tab.Screen name={'Home'} component={AbaHome} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return(<Image source={icon.logo} style={{width:125, height: 29 }}/>)
                    },
                    tabBarIcon: ({focused}) => {
                        return(<Image source={icon.home} style={
                            {
                                width:35,
                                height:35,
                                opacity: focused ? 1 : 0.5
                            }
                        }/>)
                    },
                    tabBarShowLabel: false,
                }}/>

                <Tab.Screen name={'Calendar'} component={AbaCalendar} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return(<Image source={icon.logo} style={{width:125, height: 29 }}/>)
                    },
                    tabBarIcon: ({focused}) => {
                        return(<Image source={icon.calendar} style={
                            {
                                width:35,
                                height:35,
                                opacity: focused ? 1 : 0.5
                            }
                        }/>)
                    },
                    tabBarShowLabel: false,
                }}/>

                <Tab.Screen name={'Profile'} component={AbaProfile} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return(<Image source={icon.logo} style={{width:125, height: 29 }}/>)
                    },
                    tabBarIcon: ({focused}) => {
                        return(<Image source={icon.profile} style={
                            {
                                width:40,
                                height:40,
                                opacity: focused ? 1 : 0.5
                            }
                        }/>)
                    },
                    tabBarShowLabel: false,
                }}/>
            </Tab.Navigator>
    );
}

export default Main;