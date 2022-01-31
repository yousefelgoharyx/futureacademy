import React from "react";
import { View, ScrollView, Linking } from "react-native";
import BackButton from "../components/BackButton";
import HeadView from "../components/HeadView";
import SocialMedia from "../components/SocialMedia";
import StyledText from "../components/StyledText";
const More = ({ navigation }) => {
    return (
        <>
            <HeadView small>
                <BackButton title="المزيد" onPress={navigation.goBack} />
            </HeadView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <StyledText style={{ textTransform: "uppercase" }} bold>
                        مواقع التواصل الاجتماعي
                    </StyledText>
                </View>
                <SocialMedia
                    icon="logo-facebook"
                    title="الفيسبوك"
                    subtitle="@futureacademy2015"
                    onPress={() =>
                        Linking.openURL("fb://page/594363864008881").catch(
                            () => {
                                Linking.openURL(
                                    "https://www.facebook.com/futureacademy2015"
                                );
                            }
                        )
                    }
                />
                {/* <SocialMedia
                    icon="logo-twitter"
                    title="تويتر"
                    subtitle="@futureacademy"
                    onPress={() => {
                        Linking.openURL(
                            "twitter://user?screen_name=yousefelgoharyx"
                        ).catch(() => {
                            Linking.openURL(
                                "https://www.twitter.com/yousefelgoharyx"
                            );
                        });
                    }}
                /> */}
                <SocialMedia
                    icon="logo-youtube"
                    title="يوتيوب"
                    subtitle="@futureacademy"
                    onPress={() => {
                        Linking.openURL(
                            "vnd.youtube://channel/UCFwwvgE2Mixz9yoXUxAoq2Q"
                        ).catch(() => {
                            Linking.openURL(
                                "https://www.youtube.com/channel/UCFwwvgE2Mixz9yoXUxAoq2Q"
                            );
                        });
                    }}
                />
                {/* <SocialMedia
                    icon="logo-instagram"
                    title="انستجرام"
                    subtitle="@futureacademy"
                    onPress={() => {
                        Linking.openURL(
                            "http://instagram.com/_u/yousefelgoharyx"
                        );
                    }}
                /> */}
                <SocialMedia
                    icon="logo-whatsapp"
                    title="واتساب"
                    subtitle="01229979517"
                    onPress={() => {
                        Linking.openURL(
                            `whatsapp://send?phone=+201229979517`
                        ).catch(() => {
                            alert("You don't have WhatsApp");
                        });
                    }}
                />
            </ScrollView>
        </>
    );
};

export default More;
