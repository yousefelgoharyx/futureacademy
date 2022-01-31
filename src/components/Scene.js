import React from "react";
import { View } from "react-native";
const Scene = ({ children, style, ...rest }) => {
    return (
        <View
            style={{
                backgroundColor: "#f5f5f5",
                padding: 16,
                flex: 1,
                ...style,
            }}
            {...rest}
        >
            {children}
        </View>
    );
};

export default Scene;
