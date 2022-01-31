import { useFonts } from "expo-font";
const useAppFont = () => {
    const [loaded] = useFonts({
        Poppins: require("../../assets/fonts/Cairo-Regular.ttf"),
        "Poppins-Bold": require("../../assets/fonts/Cairo-Bold.ttf"),
        "Poppins-Light": require("../../assets/fonts/Cairo-Light.ttf"),
    });
    return loaded;
};

export default useAppFont;
