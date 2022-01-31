import React from "react";
import { View, StyleSheet } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Spacer from "./Spacer";
import StyledText from "./StyledText";
const img = require("../../assets/bg1.png");
import { useWindowDimensions } from "react-native";
const Group = ({ sport, group, next }) => {
    const { width } = useWindowDimensions();
    return (
        <ImageBackground source={img} style={styles.image}>
            <View style={styles.wrapper}>
                <StyledText style={styles.sport} size={24} bold>
                    {sport}
                </StyledText>
                <Spacer size={8} />
                <StyledText style={styles.group} bold>
                    {group}
                </StyledText>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        marginBottom: 16,
        borderRadius: 8,
        minHeight: 200,
        overflow: "hidden",
    },
    wrapper: {
        backgroundColor: "#00000050",
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    sport: {
        lineHeight: 24 * 1.2,
        color: "#fff",
    },
    group: {
        lineHeight: 16 * 1.2,
        color: "#fff",
    },
});
export default Group;
