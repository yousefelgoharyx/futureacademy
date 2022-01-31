import React, { useEffect, useState } from "react";
import Firebase from "../firebase";
import useAuth from "../store/auth";
const usePays = () => {
    const { AuthedUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [c, setC] = useState(0);
    const retry = () => {
        setLoading(true);
        setError(false);
        setC(c + 1);
    };
    useEffect(() => {
        console.log("Work");
        async function fetchData() {
            try {
                let data = [];
                const payment = await Firebase.firestore()
                    .collection("studentsData")
                    .doc(AuthedUser.user.uid)
                    .collection("payment")
                    .get();
                payment.forEach((doc) => data.push(doc.data()));
                setLoading(false);
                setError(false);
                setData(data);
            } catch {
                setLoading(false);
                setError(true);
            }
        }
        fetchData();
    }, [c]);
    return { loading, data, error, retry };
};

export default usePays;
