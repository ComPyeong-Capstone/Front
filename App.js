import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import PhotoVideoScreen from "./src/screens/PhotoVideoScreen";
import PhotoCaptionScreen from "./src/screens/PhotoCaptionScreen";
import VideoGenerationScreen from "./src/screens/VideoGenerationScreen";
import FinalResultScreen from "./src/screens/FinalResultScreen";
import VideoPostScreen from "./src/screens/VideoPostScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 탭 네비게이터 포함 (HomeScreen 포함됨) */}
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        {/* 개별 화면 추가 */}
        <Stack.Screen name="PhotoVideoScreen" component={PhotoVideoScreen} />
        <Stack.Screen
          name="PhotoCaptionScreen"
          component={PhotoCaptionScreen}
        />
        <Stack.Screen
          name="VideoGenerationScreen"
          component={VideoGenerationScreen}
        />
        <Stack.Screen name="FinalResultScreen" component={FinalResultScreen} />
        <Stack.Screen name="VideoPostScreen" component={VideoPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
