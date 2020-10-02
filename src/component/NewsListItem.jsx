import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '500px',
        width : '450px',
        marginTop: '5px',
        marginBottom: '5px'
      },
    inline: {
      display: 'inline',
    },
    link: {
        textDecoration : 'none'
    }
  }));

function NewsListItem(props) {
    const {description, title, urlToImage} = props.newsData;
    const classes = useStyles();

  return (
      <React.Fragment>
      <Link className={classes.link} to={`/new/tech/${title}`}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
      </React.Fragment>
  );
}

export default NewsListItem
