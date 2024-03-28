import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("/data/categories.json")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
        axios
            .get("/data/news.json")
            .then((res) => setNews(res.data))
            .catch((err) => console.error(err));
    }, []);

    return { news, categories };
};

export default useData;
