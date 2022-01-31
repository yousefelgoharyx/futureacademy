import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
const Error = ({ onRetry, onLogout }) => {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../assets/error.png")}
                width={180}
                height={180}
                style={{ width: "100%", height: 320 }}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.loginBtn]}
                onPress={onRetry}
            >
                <StyledText bold style={{ lineHeight: 30, color: "#fff" }}>
                    اعادة المحاولة
                </StyledText>
            </TouchableOpacity>
            {onLogout ? (
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={[styles.loginBtn, { marginTop: 8 }]}
                    onPress={onLogout}
                >
                    <StyledText bold style={{ lineHeight: 30, color: "#fff" }}>
                        خروج
                    </StyledText>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    loginBtn: {
        backgroundColor: "#F5725E",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 180,
    },
    inputWrapper: {
        backgroundColor: "#fff",
        elevation: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        paddingHorizontal: 16,
    },
});

export default Error;
