import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import BackButton from "../components/BackButton";
import HeadView from "../components/HeadView";
import Scene from "../components/Scene";
import StyledText from "../components/StyledText";
import Firebase from "../firebase";
import useAuth from "../store/auth";

const Feedback = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [msg, setMsg] = useState("");
    const { AuthedUser } = useAuth();
    // if (!loading && !error && data !== null) {
    //     if (data.length === 0) page = <Empty />;
    //     else {
    //         const notes = data.notes.map((note) => <Note title={note} />);
    //         page = (
    //             <Scene>
    //                 <View style={styles.notesContainer}>{notes}</View>
    //             </Scene>
    //         );
    //     }
    // }

    // if (error && !loading) {
    //     page = <StyledText>Error</StyledText>;
    // }
    const handleSend = async () => {
        setLoading(true);
        setError(false);
        try {
            await Firebase.firestore()
                .collection("feedback")
                .add({ msg, studentID: AuthedUser.user.uid });
            setLoading(false);
            setMsg("");
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        } catch {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    };
    return (
        <>
            <HeadView small>
                <BackButton onPress={navigation.goBack} title="اضافة تعليق" />
            </HeadView>
            <Scene>
                <AutoGrowingTextInput
                    style={styles.textInput}
                    placeholder={"اكتب تعليقك"}
                    placeholderTextColor="#66737C"
                    maxHeight={300}
                    minHeight={200}
                    enableScrollToCaret
                    value={msg}
                    onChangeText={setMsg}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleSend}
                    style={[styles.loginBtn, { opacity: loading ? 0.7 : 1 }]}
                    disabled={loading}
                >
                    <StyledText bold style={{ lineHeight: 30 }} color="#fff">
                        {loading ? "انتظار..." : "ارسال"}
                    </StyledText>
                </TouchableOpacity>
                {success ? (
                    <View
                        style={{
                            padding: 16,
                            backgroundColor: "#42ba9620",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginTop: 16,
                        }}
                    >
                        <Ionicons
                            name="checkmark-done"
                            size={24}
                            color="#42ba96"
                            style={{ marginRight: 4 }}
                        />
                        <StyledText color="#42ba96">
                            {" "}
                            تم الارسال بنجاح
                        </StyledText>
                    </View>
                ) : null}
                {error ? (
                    <View
                        style={{
                            padding: 16,
                            backgroundColor: "#ff333320",
                            borderRadius: 8,
                            flexDirection: "row",
                            marginTop: 16,
                        }}
                    >
                        <Ionicons
                            name="alert-circle"
                            size={24}
                            color="#ff3333"
                            style={{ marginRight: 4 }}
                        />
                        <StyledText color="#ff3333">
                            {" "}
                            حدث خطأ ما! حاول مرة اخري
                        </StyledText>
                    </View>
                ) : null}
            </Scene>
        </>
    );
};

const styles = StyleSheet.create({
    textInput: {
        paddingLeft: 10,
        fontSize: 17,
        backgroundColor: "white",
        borderWidth: 0,
        borderRadius: 8,
        elevation: 1,
        padding: 12,
        textAlign: "right",
        textAlignVertical: "top",
    },
    loginContainer: {
        flex: 1,
        justifyContent: "center",
    },
    loginBtn: {
        backgroundColor: "#F5725E",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16,
    },
});

export default Feedback;
