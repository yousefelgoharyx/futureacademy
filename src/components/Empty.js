import React from "react";
import { Image, View } from "react-native";
import StyledText from "./StyledText";
const Empty = () => {
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
                source={require("../../assets/empty.jpg")}
                width={150}
                height={150}
                style={{ width: "100%", height: 250, marginBottom: 8 }}
            />
            <StyledText size={32} bold>
                لا يوجد شيئا هنا
            </StyledText>
        </View>
    );
};

export default Empty;
