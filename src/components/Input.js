import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Spacer from "../components/Spacer";
const Input = ({ placeholder, icon, isSecure, onChange, value, ...rest }) => {
    const [focused, setfocused] = useState(false);
    return (
        <View style={styles.inputWrapper}>
            {icon ? (
                <>
                    <Ionicons
                        name={icon}
                        size={16}
                        color={focused ? "#000" : "#00000070"}
                    />
                    <Spacer />
                </>
            ) : null}

            <TextInput
                selectionColor="#8AC6D1"
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={isSecure}
                onFocus={() => setfocused(true)}
                onBlur={() => setfocused(false)}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: "#fff",
        elevation: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        paddingHorizontal: 16,
        textAlign: "right",
    },
    input: {
        flexGrow: 1,
        height: "100%",
        textAlign: "right",
        fontFamily: "Poppins",
    },
});
export default Input;
