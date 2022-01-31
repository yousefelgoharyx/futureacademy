import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
const PayListItem = ({ date, price }) => {
    return (
        <View style={styles.payListItem}>
            <StyledText style={styles.date}>{date}</StyledText>
            <StyledText bold style={styles.price}>
                {price}
            </StyledText>
        </View>
    );
};
const PayList = ({ children }) => {
    return <View style={styles.paylist}>{children}</View>;
};

const styles = StyleSheet.create({
    paylist: {
        paddingBottom: 0,
    },
    payListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 8,
    },
    price: {
        color: "#00cc88",
        lineHeight: 16 * 1.6,
    },
    date: {
        color: "#333",
        fontWeight: "bold",
        lineHeight: 16 * 1.6,
    },
});
export { PayListItem, PayList };
