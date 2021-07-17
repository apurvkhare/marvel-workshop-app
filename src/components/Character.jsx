import React from 'react'
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
      width: 300,
      transition: 'all .2s ease-in-out',
      cursor: 'pointer',
  
      '&:hover': {
        transform: 'scale(1.07)',
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}));

const Character = ({name, description, imageURL, characterId}) => {
    const classes = useStyles()

    const history = useHistory()

    const handleClickCharacterCard = () => history.push(`/character/${characterId}`)

    return (
        <Card className={classes.root} onClick={handleClickCharacterCard}>
          <CardHeader
            title={name}
            style={{textAlign: 'center'}}
          />
          <CardMedia
            className={classes.media}
            image={imageURL}
            title="Iron Man"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description || "A Marvel Character"}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default Character
