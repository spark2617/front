import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let jwt;
        if (localStorage.getItem("auth")) {
            jwt = JSON.parse(localStorage.getItem("auth"));
        }
        const settings = {
            method: "GET",
            headers: {
                Authorization: jwt,
            },
        };

        async function getData() {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(url, settings);
                if (res.status >= 400) throw new Error("Algo saiu mal");
                const data = await res.json();
                setData(data);
                // fetch("http://54.92.161.99:9000/categories").then((response) => response.json().then((data) => console.log(data)))
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [url]);

    return { data, isLoading, error };
}



export default useFetch;
