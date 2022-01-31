import React from "react";
import { View, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import Empty from "../components/Empty";
import HeadView from "../components/HeadView";
import Loader from "../components/Loader";
import Scene from "../components/Scene";
import StyledText from "../components/StyledText";
import useNotes from "../hooks/useNotes";

const Note = ({ title }) => {
    return (
        <View style={styles.note}>
            <StyledText style={{ lineHeight: 21 }}>{title}</StyledText>
        </View>
    );
};
const Notes = ({ navigation }) => {
    const { data, error, loading } = useNotes();

    let page = <Loader />;

    if (!loading && !error && data !== null) {
        if (data.notes.length === 0) page = <Empty />;
        else {
            const notes = data.notes.map((note) => <Note title={note} />);
            page = (
                <Scene>
                    <View style={styles.notesContainer}>{notes}</View>
                </Scene>
            );
        }
    }

    if (error && !loading) {
        page = <StyledText>Error</StyledText>;
    }
    return (
        <>
            <HeadView small>
                <BackButton onPress={navigation.goBack} title="الملاحظات" />
            </HeadView>
            {page}
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    notesContainer: { borderRadius: 8, overflow: "hidden" },
    note: {
        backgroundColor: "#fff",
        padding: 16,
    },
});

export default Notes;
