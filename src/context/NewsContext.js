import React, {useState, createContext, useEffect} from 'react';

export const NewsContext = createContext();

export const NewsProvider = props => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aa43233d73304f0c9e64523f8508e6e2`);
        const jsonData = await data.json();
        console.log(jsonData.articles);
        setNews(jsonData.articles);
    }

    return <NewsContext.Provider>{props.children}</NewsContext.Provider>
}