import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import Grow from '@material-ui/core/Grow';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    marginTop: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',

    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(0deg)'
  },
  avatar: {
    backgroundColor: '#3f51b5'
  }
}));

export default function PatientsCard({ addPatient }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onClickEdit = () => {
    window.location.href = '/PatientsEdit';
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src="">
            {}
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              onClick={onClickEdit}
            >
              <EditIcon />
            </IconButton>
          </CardActions>
        }
        title={}
        subheader={}
      />
    </Card>
  );
}
PatientsCard.propTypes = {
  addPatient: PropTypes.func.isRequired
}
