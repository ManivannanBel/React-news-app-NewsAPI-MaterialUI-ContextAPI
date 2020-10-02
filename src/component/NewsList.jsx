import React, { useEffect, useState } from 'react'
import NewsListItem from './NewsListItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
      margin : 'auto',
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    }
  }));

function NewsList() {
    const classes = useStyles();

    const [newListData, setNewsListData] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aa43233d73304f0c9e64523f8508e6e2`);
        const jsonData = await data.json();
        console.log(jsonData.articles);
        setNewsListData(jsonData.articles);
    }
    
    const renderNewsList = () => {
        //console.log()
        return newListData.map(news => < NewsListItem newsData={news}/>);
    }
    
    return (
        <div>
            <List className={classes.root}>
                {renderNewsList()}
            </List>
        </div>
    );
}

export default NewsList
