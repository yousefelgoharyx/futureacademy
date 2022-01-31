// import React from "react";
// import { ImageBackground, View, StyleSheet, TouchableOpacity } from "react-native";
// import Spacer from "./Spacer";
// import StyledText from "./StyledText";

// const img = require("../../assets/bg1.png");

// const Card = ({ title, body, onPress }) => {
//   return (
//     <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
//       <ImageBackground source={img} style={styles.image}>
//         <View style={styles.content}>
//           <StyledText size={18} bold color="#fff">
//             {title}
//           </StyledText>
//           <Spacer size={8} />
//           <StyledText light size={12} color="#fff">
//             {body}
//           </StyledText>
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     elevation: 1,
//     borderRadius: 8,
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     minHeight: 300
//   },
//   image: {
//     flex: 1,
//   },
//   content: {
//     backgroundColor: "#00000040",
//     flex: 1,
//     padding: 32,
//     paddingTop: 40,
//   },
// });
// export default Card;

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StyledText from "./StyledText";
import Spacer from "./Spacer";
import { useWindowDimensions } from "react-native";
const Card = ({ title, body, onPress, color = "#FFDC8B", icon }) => {
    const { width } = useWindowDimensions();
    const cardHeight = (width - 48) / 2;
    const iconWrapperStyles = { backgroundColor: `${color}40` };
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.container, { height: cardHeight }]}
            onPress={onPress}
        >
            <View style={[styles.iconWrapper, iconWrapperStyles]}>
                <Ionicons name={icon} size={32} color={color} />
            </View>
            <Spacer />
            <StyledText bold size={20} color={color}>
                {title}
            </StyledText>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#fff",
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 150,
        borderRadius: 8,
        flex: 1,
    },
    iconWrapper: { padding: 16, borderRadius: 32 },
});

export default Card;
