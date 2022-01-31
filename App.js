import React, { useMemo } from "react";
import { I18nManager, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Stacks/Home";
import Notes from "./src/Stacks/Notes";
import Lessons from "./src/Stacks/Lessons";
import useAppFont from "./src/hooks/useAppFont";
import Profile from "./src/Stacks/Profile";
import Feedback from "./src/Stacks/Feedback";
import More from "./src/Stacks/More";
import Login from "./src/Stacks/Login";
import useAuth from "./src/store/auth";
import Pays from "./src/Stacks/Pays";

const Stack = createStackNavigator();
export default function App() {
    const loaded = useAppFont();
    const { isAuthed } = useAuth();
    if (!loaded) return null;
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <StatusBar
                    style="auto"
                    backgroundColor="transparent"
                    translucent
                />
                <Stack.Navigator screenOptions={{ headerMode: "none" }}>
                    {isAuthed ? (
                        <>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Notes" component={Notes} />
                            <Stack.Screen name="Lessons" component={Lessons} />
                            <Stack.Screen name="Profile" component={Profile} />
                            <Stack.Screen name="More" component={More} />
                            <Stack.Screen name="Pays" component={Pays} />
                            <Stack.Screen
                                name="Feedback"
                                component={Feedback}
                            />
                        </>
                    ) : (
                        <Stack.Screen name="Login" component={Login} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
