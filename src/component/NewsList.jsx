import React, { useEffect, useState, useContext } from 'react'
import NewsListItem from './NewsListItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {NewsContext} from '../context/NewsContext';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      margin : 'auto',
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    catagory: {
        backgroundColor : '#4290f5',
        width: '100%',
        maxWidth: '36ch',
        margin: 'auto',
        height: '40px',
    },
    primary: {
        paddingTop: '10px',
        color: '#ffff',
        fontWeight: '600',
    }
  }));

function NewsList(props) {
    const classes = useStyles();

    const {catagory} = props;

    let newsListData;

    const newsContext = useContext(NewsContext);
    let [techNewsListData, businessNewsListData] = newsContext;
    if(catagory === 'Technology'){
        newsListData = Array.from(techNewsListData.values());
    }else if(catagory === 'Business'){
        newsListData = Array.from(businessNewsListData.values());
    }
    
    console.log(newsListData);
    
    const renderNewsList = () => {
        return newsListData.map(news => <NewsListItem newsData={news} catagory={catagory} key={news.title}/>);
    }
    
    return (
        <div>
            <ListItemText className={classes.catagory} classes={classes} primary={catagory} />
            <List className={classes.root}>
                {renderNewsList()}
            </List>
        </div>
    );
}

export default NewsList
