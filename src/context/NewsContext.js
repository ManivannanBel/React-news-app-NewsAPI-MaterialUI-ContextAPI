import React, {useState, createContext, useEffect} from 'react';

export const NewsContext = createContext();

export const NewsProvider = props => {
    const [techNewsListData, setTechNewsListData] = useState(new Map());
    const [businessNewsListData, setBusinessNewsListData] = useState(new Map());
    
    useEffect(() => {
        fetchTechNewsData();
        fetchBusinessNewsData();
    },[]);

    const fetchTechNewsData = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aa43233d73304f0c9e64523f8508e6e2`);
        const jsonData = await data.json();
        console.log(jsonData.articles);
        const newsMap = new Map();// jsonData.articles.map(article => {id : article.title, article})
        jsonData.articles.forEach(article => {
            newsMap.set((article.title), article);
        });
        setTechNewsListData(newsMap);
    }

    const fetchBusinessNewsData = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aa43233d73304f0c9e64523f8508e6e2`);
        const jsonData = await data.json();
        console.log(jsonData.articles);
        const newsMap = new Map();// jsonData.articles.map(article => {id : article.title, article})
        jsonData.articles.forEach(article => {
            newsMap.set((article.title), article);
        });
        setBusinessNewsListData(newsMap);
    }

    return <NewsContext.Provider value={[techNewsListData, businessNewsListData]}>{props.children}</NewsContext.Provider>
}