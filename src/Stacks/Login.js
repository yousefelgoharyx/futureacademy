import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ToastAndroid,
    StatusBar,
} from "react-native";
import Input from "../components/Input";
import Scene from "../components/Scene";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import Firebase from "../firebase";
import useAuth from "../store/auth";
const auth = Firebase.auth();
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { setUser } = useAuth();
    async function handleSubmit() {
        setLoading(true);
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
            setUser(user);
            setLoading(false);
        } catch {
            setLoading(false);
            setError(true);
            ToastAndroid.show("حدث خطأ ما برجاء اعادة المحاولة", 1000);
        }
    }
    return (
        <Scene>
            <StatusBar barStyle="dark-content" />
            <View style={styles.loginContainer}>
                <StyledText bold size={18} style={{ textAlign: "center" }}>
                    اهلا بك في فيوتشر اكاديمي
                </StyledText>
                <Spacer size={16} />
                <Input
                    icon="person"
                    placeholder="البريد الالكتروني"
                    onChange={(e) => setEmail(e)}
                    value={email}
                />
                <Spacer size={8} />
                <Input
                    icon="lock-closed"
                    placeholder="كلمة المرور"
                    isSecure
                    onChange={(e) => setPassword(e)}
                    value={password}
                />
                <Spacer size={8} />
                <TouchableOpacity
                    onPress={handleSubmit}
                    activeOpacity={0.7}
                    style={[styles.loginBtn, { opacity: loading ? 0.7 : 1 }]}
                    disabled={loading}
                >
                    <StyledText bold style={{ lineHeight: 30 }} color="#fff">
                        {loading ? "انتظر..." : "دخول"}
                    </StyledText>
                </TouchableOpacity>
            </View>
        </Scene>
    );
};
const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
        textAlign: "center",
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
    },
});
export default Login;
