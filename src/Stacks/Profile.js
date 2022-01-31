import React from "react";
import HeadView from "../components/HeadView";
import BackButton from "../components/BackButton";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "../store/auth";
import useUserData from "../hooks/useUserData";
import Loader from "../components/Loader";
import genDep from "../utils/genDep";
import genEvaluation from "../utils/genEvaluation";
import Error from "../components/Error";
const ProfileData = ({ title, children }) => {
    return (
        <View>
            <StyledText size={12} bold style={{ textTransform: "uppercase" }}>
                {title}
            </StyledText>
            <StyledText>{children}</StyledText>
        </View>
    );
};

const Section = ({ children, title }) => {
    return (
        <View style={styles.section}>
            <StyledText bold style={styles.sectionHead} size={14}>
                {title}
            </StyledText>
            <View style={styles.sectionContent}>{children}</View>
        </View>
    );
};

const Profile = ({ navigation }) => {
    async function fetcher() {
        throw new Error("error");
    }
    const { logout } = useAuth();
    const { loading, error, data } = useUserData();
    let page = <Loader />;
    if (!loading && !error && data !== null) {
        let evaluation = genEvaluation(data.evaluation);
        let sport = genDep(data.department);
        page = (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Section title="المعلومات العامة">
                    <ProfileData title="الاسم">{data.name}</ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="السن">{data.age}</ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="العنوان">{data.address}</ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="المجموعة">{data.groupName}</ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="الرياضة">{sport}</ProfileData>
                </Section>

                <Section title="الطالب">
                    <ProfileData title="عدد الحصص">
                        {data.attHistory.length}
                    </ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="الملاحظات">
                        {data.notes.length}
                    </ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="التقييم">{evaluation}</ProfileData>
                </Section>

                <Section title="معلومات المدير">
                    <ProfileData title="الاسم">Mohammed El Sakka</ProfileData>
                    <Spacer size={16} />
                    <ProfileData title="رقم الهاتف">01229979517</ProfileData>
                </Section>
                <Section title="اعدادات">
                    <TouchableOpacity
                        onPress={logout}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons name="log-out" size={24} />
                        <Spacer size={8} />
                        <StyledText>خروج</StyledText>
                    </TouchableOpacity>
                </Section>
                <View style={styles.credits}>
                    <View style={styles.cnameWrapper}>
                        <StyledText size={12} style={styles.creditsText}>
                            Powered by
                        </StyledText>
                        <Spacer size={4} />
                        <StyledText bold style={styles.creditsLogo}>
                            ITGO
                        </StyledText>
                    </View>
                    <StyledText size={12} style={{ textAlign: "center" }}>
                        IT Solutions Company
                    </StyledText>
                </View>
            </ScrollView>
        );
    }
    if (error && !loading) {
        page = <Error />;
    }
    return (
        <>
            <HeadView small>
                <BackButton title="البروفايل" onPress={navigation.goBack} />
            </HeadView>

            {page}
        </>
    );
};

const styles = StyleSheet.create({
    section: {},
    sectionContent: {
        backgroundColor: "#fff",
        padding: 16,
    },
    sectionHead: {
        textTransform: "uppercase",
        padding: 16,
    },
    credits: {
        backgroundColor: "#fff",
        padding: 16,
        borderTopColor: "#f1f1f1",
        borderTopWidth: 1,
    },
    cnameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    creditsText: { textAlign: "center", lineHeight: 16 },
    creditsLogo: { lineHeight: 21 },
});

export default Profile;
