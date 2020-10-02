import React, {useState, createContext, useEffect} from 'react';

export const NewsContext = createContext();

export const NewsProvider = props => {
    const [newsListData, setNewsListData] = useState(new Map());
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aa43233d73304f0c9e64523f8508e6e2`);
        const jsonData = await data.json();
        console.log(jsonData.articles);
        const newsMap = new Map();// jsonData.articles.map(article => {id : article.title, article})
        jsonData.articles.forEach(article => {
            newsMap.set(article.title, article);
        });
        setNewsListData(newsMap);
    }

    return <NewsContext.Provider value={[newsListData, setNewsListData]}>{props.children}</NewsContext.Provider>
}