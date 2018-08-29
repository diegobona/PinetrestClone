import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/dog.jpg";

const styles = {
  card: {
    width: 240
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  },
  cardWrapper: {
    width: 250,
    padding: 10,
    position: "relative"
  },
  overlay: {
    //border: 2px solid green;
    "z-index": 10,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 10,
    transition: "background-color .5s, margin .25s",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      margin: 0
    }
  }
};

function ImgMediaCard(props) {
  const { classes, image } = props;
  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          //height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">Some kind of description</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);

//<div className={classes.overlay} />
