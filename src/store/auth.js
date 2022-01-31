import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, useAtom } from "jotai";
const atomWithAsyncStorage = (key, initialValue) => {
    const baseAtom = atom(initialValue);
    baseAtom.onMount = (setValue) => {
        (async () => {
            const item = await AsyncStorage.getItem(key);
            setValue(JSON.parse(item));
        })();
    };
    const derivedAtom = atom(
        (get) => get(baseAtom),
        (get, set, update) => {
            const nextValue =
                typeof update === "function" ? update(get(baseAtom)) : update;
            set(baseAtom, nextValue);
            AsyncStorage.setItem(key, JSON.stringify(nextValue));
        }
    );
    return derivedAtom;
};

const IsAuthedAtom = atomWithAsyncStorage("isauthed", false);
const AuthedUserAtom = atomWithAsyncStorage("user", null);

function useAuth() {
    const [isAuthed, setIsAuthed] = useAtom(IsAuthedAtom);
    const [AuthedUser, setAuthedUser] = useAtom(AuthedUserAtom);
    function setUser(user) {
        setAuthedUser(user);
        setIsAuthed(true);
    }

    function logout() {
        setIsAuthed(false);
        setAuthedUser(null);
    }

    return { logout, setUser, isAuthed, AuthedUser };
}

export default useAuth;
