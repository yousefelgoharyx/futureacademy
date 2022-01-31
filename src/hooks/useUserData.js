import React, { useEffect, useState } from "react";
import Firebase from "../firebase";
import useAuth from "../store/auth";
const useUserData = () => {
    const { AuthedUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);
    const retry = () => {
        setCount(count + 1);
        setLoading(true);
        setError(false);
    };
    useEffect(() => {
        async function fetchData() {
            try {
                let userdata = await Firebase.firestore()
                    .collection("studentsData")
                    .doc(AuthedUser.user.uid)
                    .get();
                if (userdata.exists) {
                    let groupdata = await Firebase.firestore()
                        .collection("groupsCard")
                        .doc(userdata.data().group)
                        .get();
                    if (groupdata.exists) {
                        let user = userdata.data();
                        let group = groupdata.data();

                        let alldata = { ...user, ...group };
                        setLoading(false);
                        setError(false);
                        setData(alldata);
                    } else {
                        setLoading(false);
                        setError(true);
                    }
                } else {
                    setLoading(false);
                    setError(true);
                }
            } catch {
                setLoading(false);
                setError(true);
            }
        }
        fetchData();
    }, [count]);
    return { loading, data, error, retry };
};

export default useUserData;
