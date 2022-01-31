import React from "react";
import { Text } from "react-native";
const StyledText = ({
    bold,
    light,
    style,
    size = 16,
    color = "#394054",
    children,
    ...rest
}) => {
    const styles = {
        fontFamily: "Poppins",
        color,
        fontSize: size,
        textAlign: "left",
        ...style,
    };
    if (bold) styles.fontFamily = "Poppins-Bold";
    if (light) styles.fontFamily = "Poppins-Light";
    return (
        <Text {...rest} style={styles}>
            {children}
        </Text>
    );
};

export default StyledText;
