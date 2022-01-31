import React from "react";
import { View, StyleSheet } from "react-native";
const HeadView = (props) => {
    const containerStyles = { height: props.small ? 114 : 250 };
    const contentStyles = {
        height: props.small ? 64 : 200,
        paddingStart: props.small ? 16 : 32,
    };
    return (
        <View style={[styles.container, containerStyles]}>
            <View style={styles.firstCol}>
                <View style={styles.firstColFirstChild}>
                    <View style={styles.firstColFirstChild1}></View>
                    <View style={styles.firstColFirstChild2}></View>
                </View>
                <View style={[styles.firstColSecondChild, contentStyles]}>
                    {props.children}
                </View>
            </View>
            <View style={styles.secondCol}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#ff5",
    },
    firstCol: {
        flexGrow: 1,
    },
    firstColFirstChild: {
        flexDirection: "row",
    },
    firstColSecondChild: {
        backgroundColor: "#FAE3D9",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    firstColFirstChild1: {
        backgroundColor: "#FFDC8B",
        height: 50,
        flexGrow: 1,
    },
    firstColFirstChild2: {
        backgroundColor: "#FFB6B9",
        height: 50,
        flexGrow: 1,
    },
    secondCol: {
        backgroundColor: "#F5725E",
        flexBasis: 80,
    },
});

export default HeadView;
