import React from "react";
import { ActivityIndicator, View } from "react-native";
const Loader = () => {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivityIndicator
                size="large"
                color="#F5725E"
                style={{ transform: [{ scale: 1.5 }] }}
            />
        </View>
    );
};

export default Loader;
