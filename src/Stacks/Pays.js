import React from "react";
import { ScrollView, View } from "react-native";
import BackButton from "../components/BackButton";
import HeadView from "../components/HeadView";
import { PayList, PayListItem } from "../components/PayList";
import Scene from "../components/Scene";
import usePays from "../hooks/usePays";
import Loader from "../components/Loader";
import Error from "../components/Error";
import StyledText from "../components/StyledText";
import Empty from "../components/Empty";

function convertToOurTime(timestap) {
    let date = new Date(timestap * 1000);
    return date.toLocaleDateString();
}
const Pays = ({ navigation }) => {
    const { data, error, loading, retry } = usePays();
    let page = <Loader />;

    if (!loading && !error && data !== null) {
        page =
            data.length === 0 ? (
                <Empty />
            ) : (
                <Scene>
                    <PayList>
                        {data.map((pay, i) => (
                            <PayListItem
                                key={i}
                                date={convertToOurTime(pay.date.seconds)}
                                price={pay.cost + " جنيه"}
                            />
                        ))}
                    </PayList>
                </Scene>
            );
    }
    if (error && !loading) {
        page = <Error onRetry={retry} />;
    }
    return (
        <>
            <HeadView small>
                <BackButton title="الدفع" onPress={navigation.goBack} />
            </HeadView>
            {page}
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                <Scene>
                    <PayList>
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                        <PayListItem date="21/9/2021" price="25 جنيه" />
                    </PayList>
                </Scene>
            </ScrollView> */}
        </>
    );
};

export default Pays;
