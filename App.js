import Home from "./src/screen/Home";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screen/About";
import Course from "./src/screen/Course";
import AppLoading from 'expo-app-loading';
import UserData from "./src/screen/UserData";
import Contact from "./src/screen/Contact";
import Menu from "./src/components/Menu";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
    }from "@expo-google-fonts/josefin-sans";

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded]=useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded) {
    <AppLoading/>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">


     <Stack.Screen name="Home">
      {(props)=><Home {...props} channeName={"Aman Mishra"} />}
     </Stack.Screen>

     <Stack.Screen name="Course"
     component={Course}
     options={{
      headerTitleStyle:{
        fontSize:25,
        fontFamily:"Nunito_600SemiBold",
      },
      headerTitle:"Course",
      headerTitleAlign:"center",
     }}/>
     <Stack.Screen name="About" component={About} />
     <Stack.Screen name="UserData" component={UserData} />
     <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



