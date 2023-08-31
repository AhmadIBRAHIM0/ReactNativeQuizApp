import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import QuizScreen from './src/screen/QuizScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/screen/ProfileScreen";
import ResultScreen from "./src/screen/ResultScreen";
import AntDesign from "react-native-vector-icons/AntDesign";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'HomeScreen') {
                    iconName = focused
                        ? 'home-outline'
                        : 'home-outline-circle';

                } else if (route.name === 'Profile') {
                    iconName = focused ? 'people-circle' : 'people-circle-outline';
                }

                return <AntDesign name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
)

const HomeStack = () => (

    <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeTab}
                      options={{
                          headerShown: false,
                      }}/>
        <Stack.Screen name="QuizScreen" component={QuizScreen}
                      options={{
                          title: "Quiz",
                      }}
        />
        <Stack.Screen name="ResultScreen" component={ResultScreen}/>
    </Stack.Navigator>

);

export default function App() {
    return (
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    );
}
