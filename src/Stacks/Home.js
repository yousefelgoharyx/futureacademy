import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    useWindowDimensions,
} from "react-native";
import Error from "../components/Error";
import Card from "../components/Card";
import Group from "../components/Group";
import HeadView from "../components/HeadView";
import Loader from "../components/Loader";
import Scene from "../components/Scene";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import useUserData from "../hooks/useUserData";
import genDep from "../utils/genDep";
import useAuth from "../store/auth";
const Home = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const { data, error, loading, retry } = useUserData();
    const { logout } = useAuth();
    let name = <View style={styles.namePlaceholder}></View>;
    let page = <Loader />;
    if (!loading && !error && data !== null) {
        let sport = genDep(data.department);
        name = data.name;
        page = (
            <ScrollView>
                <Scene style={{ backgroundColor: "#f2f2f2" }}>
                    <Group sport={sport} group={data.groupName} next="" />
                    <View style={styles.row}>
                        <Card
                            title="الدفع"
                            body="Keep up with your lessons"
                            icon="cash"
                            color="#F5725C"
                            onPress={() => navigation.navigate("Pays")}
                        />
                        <Spacer />
                        <Card
                            title="التعليقات"
                            body="Keep up with your Notes"
                            icon="help"
                            onPress={() => navigation.navigate("Feedback")}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.row}>
                        <Card
                            title="الغياب"
                            body="Keep up with your lessons"
                            icon="book"
                            onPress={() => navigation.navigate("Lessons")}
                        />
                        <Spacer />
                        <Card
                            title="الملاحظات"
                            body="Keep up with your Notes"
                            color="#F5725C"
                            icon="shield"
                            onPress={() => navigation.navigate("Notes")}
                        />
                    </View>
                    <Spacer />
                    <View style={styles.row}>
                        <Card
                            title="البروفايل"
                            body="Keep up with your Notes"
                            color="#F5725C"
                            icon="person"
                            onPress={() => navigation.navigate("Profile")}
                        />
                        <Spacer />
                        <Card
                            title="المزيد"
                            body="Keep up with your lessons"
                            onPress={() => navigation.navigate("More")}
                            icon="rocket"
                        />
                    </View>
                </Scene>
            </ScrollView>
        );
    }
    if (error && !loading) {
        page = <Error onRetry={retry} onLogout={logout} />;
    }
    return (
        <>
            <HeadView small={height < 800}>
                <StyledText bold size={32}>
                    اهلا بك
                </StyledText>
                <StyledText light size={24}>
                    {name}
                    <View></View>
                </StyledText>
            </HeadView>

            {page}
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row-reverse",
        flexWrap: "wrap",
    },
    namePlaceholder: {
        backgroundColor: "#ddd",
        height: 24,
        width: 180,
        opacity: 1,
        borderRadius: 16,
    },
});

export default Home;
