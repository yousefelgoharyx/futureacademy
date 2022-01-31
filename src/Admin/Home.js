import React from "react";
import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import Card from "../components/Card";
import HeadView from "../components/HeadView";
import Scene from "../components/Scene";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";

const Home = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <HeadView small={height < 800}>
        <StyledText bold size={32}>
          Good Morning
        </StyledText>
        <StyledText light size={24}>
          El Sakka
        </StyledText>
      </HeadView>
      <ScrollView>
        <Scene style={{ backgroundColor: "#f2f2f2" }}>
          <Card title="Lessons" body="Keep up with your lessons" icon="book" />
          <Spacer />
          <Card
            title="Notes"
            body="Keep up with your Notes"
            color="#BBDED6"
            icon="shield"
          />
          <Spacer />
          <Card
            title="More"
            body="Keep up with your lessons"
            color="#FFB6B9"
            icon="rocket"
          />
          <Spacer />
          <Card
            title="Profile"
            body="Keep up with your Notes"
            color="#FAE3D9"
            icon="person"
          />
        </Scene>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Home;
