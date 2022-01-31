import React, { useEffect, useState } from "react";
import Firebase from "../firebase";
import useAuth from "../store/auth";
const useNotes = () => {
    const { AuthedUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                let userdata = await Firebase.firestore()
                    .collection("studentsData")
                    .doc(AuthedUser.user.uid)
                    .get();
                if (userdata.exists) {
                    let alldata = userdata.data();
                    setLoading(false);
                    setError(false);
                    setData(alldata);
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
    }, []);
    return { loading, data, error };
};

export default useNotes;
