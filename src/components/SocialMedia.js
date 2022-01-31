import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
const SocialMedia = ({ icon, title, subtitle, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.wrapper}
            onPress={onPress}
        >
            <View style={styles.iconWrapper}>
                <Ionicons size={32} name={icon} color="#000" />
            </View>
            <View>
                <StyledText bold style={{ textTransform: "uppercase" }}>
                    {title}
                </StyledText>
                <StyledText>{subtitle}</StyledText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 96,
        alignItems: "center",
        marginBottom: 1,
    },
    iconWrapper: {
        width: 96,
        height: 96,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 0,
        marginRight: 16,
    },
});

export default SocialMedia;
