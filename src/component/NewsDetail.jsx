import React, {useContext, useEffect, useState} from 'react'
import { NewsContext } from '../context/NewsContext';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    author: {
      textAlign : 'right',
      marginTop : '10px',
      marginBottom : '20px',
      fontWeight : '500',
    },
    img: {
        width : '100%'
    }
  }));

function NewsDetail(props) {
    const classes = useStyles();

    const [techNewsListData, businessNewsListData] = useContext(NewsContext);

    const [news, setNews] = useState({});

    useEffect(() => {
        // console.log(newsListData);
        // console.log(newsListData.get(props.match.params.title));
        // console.log(props.match.params.title);
        switch(props.match.params.catagory){
            case 'Technology':
                setNews(techNewsListData.get(props.match.params.title));
                break;
            case 'Business':
                setNews(businessNewsListData.get(props.match.params.title));
                break;
        }

    },[techNewsListData, businessNewsListData]);

    return (
        <Container maxWidth="sm">
        <div>
            {news && 
            <React.Fragment>
            <h2>{news.title}</h2>
            <img className={classes.img} src={news.urlToImage}/>
            <h4>{news.description}</h4>
            <a href={news.url}>{news.content}</a>
            <div className={classes.author}>-{news.author}</div>
            </React.Fragment>}
        </div>
        </Container>
    )
}

export default NewsDetail
