import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Friends, Search } from "./src/screens";

const RootStack = createStackNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Friends" component={Friends} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// When we have multiple Stacks
// function RootStackScreen() {
//   return (
//     <RootStack.Navigator initialRouteName={"App"}>
//       <RootStack.Screen
//         name="App"
//         component={AppStackScreen}
//         options={{ headerShown: false }}
//       />

//       <RootStack.Screen
//         name="ModalStackScreen"
//         component={ModalStackScreen}
//         options={{ headerShown: false }}
//       />
//     </RootStack.Navigator>
//   );
// }

function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={"Friends"} component={Friends}/>
      <AppStack.Screen name={"Search"} component={Search}/>
    </AppStack.Navigator>
  );
}
// FOR MODAL STACK
// function ModalStackScreen() {
//   return (
//     <ModalStack.Navigator mode={"modal"}>
//       <ModalStack.Screen name="Contacts" component={Contacts} options={{ headerShown: false }} />
//     </ModalStack.Navigator>
//   );
// }

