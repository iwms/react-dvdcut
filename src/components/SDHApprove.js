import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SDHApproveCard from './SDHApproveCard';
const currencies = [
  {
    value: 'กรกนก คำหล้า',
    label: 'กรกนก คำหล้า'
  },
  {
    value: 'นัทมน คนใจสู้',
    label: 'นัทมน คนใจสู้'
  },
  {
    value: 'ปราณี สิงห์',
    label: 'ปราณี สิงห์'
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '55px',
    marginBottom: '55px',
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0),
    color: '#3f51b5',
    fontSize: '18px'
  },
  title: {
    flexGrow: 1,
    color: '#3f51b5'
  },
  appbar: {
    background: '#fff',
    borderBottom: '1px solid #e0e0e0'
  },
  bnav: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    borderTop: '1px solid #e0e0e0'
  }
}));

export default function SDHApprove() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState('');

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onClickAdd = () => {
    window.location.href = '/InGarbageAdd';
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ color: '#fff' }}
          >
            <EditIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title} align="center">
            ข้อมูลขยะ - รพ.สต.
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
            style={{ color: '#fff' }}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SDHApproveCard />
      <SDHApproveCard />
      <SDHApproveCard />
      <SDHApproveCard />
      <SDHApproveCard />
    </div>
  );
}
