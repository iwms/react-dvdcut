// imports the React Javascript Library
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800]
    }
  },
  cardHeader: {
    textalign: 'center',
    align: 'center'
  },
  input: {
    display: 'none'
  },
  title: {
    color: blue[800],
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    align: 'center'
  },
  button: {
    color: blue[900],
    margin: 10,
    width: theme.spacing.unit * 15,
    height: theme.spacing.unit * 15
  },
  secondaryButton: {
    color: 'gray',
    margin: 10
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'default'
  },
  img: {
    width: theme.spacing.unit * 15,
    height: theme.spacing.unit * 15,
    margin: '10px',
    borderRadius: '50%',
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
    backgroundColor: theme.palette.secondary.main,
    boxSizing: 'border-box',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  imgpad: {
    padding: '16px 16px 24px'
  }
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: 'initial', // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null
  };

  handleUploadClick = event => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      mainState: 'uploaded',
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  renderInitialState() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <CardContent borderRadius="50%">
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }

  renderUploadedState() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.imgpad}>
          <img
            width="100%"
            className={(classes.media, classes.img)}
            src={this.state.selectedFile}
            onClick={this.imageResetHandler}
          />
        </div>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    console.log('Click!');
    this.setState({
      mainState: 'initial',
      selectedFile: null,
      imageUploaded: 0
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          {(this.state.mainState == 'initial' && this.renderInitialState()) ||
            (this.state.mainState == 'uploaded' && this.renderUploadedState())}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
