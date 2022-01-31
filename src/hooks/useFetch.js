import { useEffect, useState } from "react";

const useFetch = (fetcher) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetcher();
                setData(data);
                setLoading(false);
                setError(false);
            } catch {
                setLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    return { loading, error, data };
};

export default useFetch;
