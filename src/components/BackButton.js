import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

const BackButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={onPress}
        >
            <Ionicons
                name="arrow-forward"
                size={24}
                style={{ marginRight: 8 }}
            />
            <StyledText bold style={{ lineHeight: 30 }}>
                {title}
            </StyledText>
        </TouchableOpacity>
    );
};

export default BackButton;
