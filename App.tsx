import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BassBottom from "./screens/BassBottom";
import BassTop from "./screens/BassTop";
import TrebleBottom from "./screens/TrebleBottom";
import TrebleTop from "./screens/TrebleTop";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="BassBottom"
          component={BassBottom}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="music-clef-bass"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="BassTop"
          component={BassTop}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="music-clef-bass"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="TrebleBottom"
          component={TrebleBottom}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="music-clef-treble"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="TrebleTop"
          component={TrebleTop}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="music-clef-treble"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
