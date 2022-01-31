import React from "react";
import BackButton from "../components/BackButton";
import HeadView from "../components/HeadView";
import Scene from "../components/Scene";
import StyledText from "../components/StyledText";
import Empty from "../components/Empty";
import { ScrollView, StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";
import useUserData from "../hooks/useUserData";
import Loader from "../components/Loader";

const Day = ({ day, date, status }) => {
    let color = "red";
    if (status === "done") color = "green";
    if (status === "upcoming") color = "blue";
    const dayHeadStyles = {
        color,
        textTransform: "uppercase",
    };
    return (
        <View style={styles.dayWrapper}>
            <StyledText bold size={14} style={dayHeadStyles}>
                {day}
            </StyledText>
            <Spacer size={8} />
            <StyledText color="#999" size={10}>
                {date}
            </StyledText>
        </View>
    );
};

const Month = ({ title, data, children }) => (
    <>
        {title ? (
            <StyledText style={styles.monthHead} bold size={14}>
                {title}
            </StyledText>
        ) : null}

        <View style={styles.monthWrapper}>{children}</View>
    </>
);
var dates = {
    Tue: "الثلاثاء",
    Sat: "السبت",
    Sun: "الاحد",
    Fri: "الجمعة",
    Thu: "الخميس",
    Wed: "الاربعاء",
    Mon: "الاثنين",
};
function convertToOurTime(timestap) {
    let date = new Date(timestap * 1000);
    const humanDateFormat = date.toLocaleString();
    let dayName =
        dates[date.toLocaleString("ar-EG", { weekday: "long" }).slice(0, 3)];
    let dateString = date.toLocaleDateString("ar-EG", {
        day: "numeric",
    });
    return [dayName, dateString];
}

function resolveAttHistory(attHistory) {
    let alldates = new Set();
    attHistory.forEach((ts) => {
        const [, dayString] = convertToOurTime(ts.seconds);
        alldates.add(dayString.slice(0, 2));
    });
    return Array.from(alldates);
}
const monthsLong = {
    "01": "يناير",
    "02": "فبراير",
    "03": "مارس",
    "04": "ابريل",
    "05": "مايو",
    "06": "يونيو",
    "07": "يوليو",
    "08": "اغسطس",
    "09": "سبتمبر",
    10: "اكتوبر",
    11: "نوفمبر",
    12: "ديسيمبر",
};

function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("default", { month: "long" });
    return monthName;
}

const Lessons = ({ navigation }) => {
    const { data, loading, error } = useUserData();
    let page = <Loader />;
    if (!loading && !error && data !== null) {
        if (data.attHistory.length === 0 && data.dates.length === 0) {
            page = <Empty />;
        } else {
            let groupDates = data.dates;
            let studentHistory = data.attHistory;
            let doneLessons = [];
            let absentLessons = [];
            let upcomingLessons = [];
            let currentDate = Math.floor(Date.now() / 1000);
            groupDates.forEach((groupDate, i) => {
                studentHistory.forEach((studentDate) => {
                    if (studentDate.seconds === groupDate.seconds) {
                        doneLessons.push(studentDate);
                        delete groupDates[i];
                    }
                });
            });
            upcomingLessons = groupDates.filter((groupDate) => {
                return groupDate.seconds > currentDate;
            });
            absentLessons = groupDates.filter((groupDate) => {
                return groupDate.seconds < currentDate;
            });
            let allDates = [];
            doneLessons.forEach((lesson) => {
                allDates.push({ ts: lesson.seconds, status: "done" });
            });
            upcomingLessons.forEach((lesson) => {
                allDates.push({ ts: lesson.seconds, status: "upcoming" });
            });
            absentLessons.forEach((lesson) => {
                allDates.push({ ts: lesson.seconds });
            });
            console.log("------------------------");
            console.log(allDates.sort());
            page = (
                <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
                    <ScrollView>
                        <Scene>
                            <Month>
                                {allDates
                                    .sort(function (a, b) {
                                        return a.ts - b.ts;
                                    })
                                    .map((date) => {
                                        let [dayName, dateString] =
                                            convertToOurTime(date.ts);
                                        return (
                                            <Day
                                                key={dateString}
                                                day={dayName}
                                                date={dateString}
                                                status={date.status}
                                            />
                                        );
                                    })}
                            </Month>
                        </Scene>
                    </ScrollView>
                </View>
            );
            // const monthsArray = resolveAttHistory(data.attHistory);
            // page = (
            //     <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
            //         <ScrollView showsVerticalScrollIndicator={false}>
            //             <Scene>
            //                 {monthsArray.map((month) => {
            //                     return (
            //                         <Month
            //                             title={monthsLong[month]}
            //                             key={month}
            //                         >
            //                             {data.attHistory.map((ts) => {
            //                                 let [dayName, dateString] =
            //                                     convertToOurTime(ts.seconds);
            //                                 if (
            //                                     dateString.slice(0, 2) === month
            //                                 )
            //                                     return (
            //                                         <Day
            //                                             day={dayName}
            //                                             date={dateString}
            //                                             active={true}
            //                                             key={dateString}
            //                                         />
            //                                     );
            //                             })}
            //                         </Month>
            //                     );
            //                 })}
            //             </Scene>
            //         </ScrollView>
            //     </View>
            // );
        }
    }
    if (error && !loading) {
        page = <StyledText>Error</StyledText>;
    }
    return (
        <>
            <HeadView small>
                <BackButton title="الغياب" onPress={navigation.goBack} />
            </HeadView>
            {page}
        </>
    );
};

const styles = StyleSheet.create({
    monthWrapper: {
        backgroundColor: "#fff",
        padding: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 8,
        elevation: 1,
        marginTop: 16,
        marginBottom: 16,
    },
    monthHead: {
        lineHeight: 21,
        textAlign: "center",
    },
    dayWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        padding: 16,
        justifyContent: "center",
    },
});
export default Lessons;
