import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import PatientsCard from './PatientsCard';

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

export default function Patients() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onClickAdd = () => {
    window.location.href = '/PatientsAdd';
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
            ข้อมูลผู้ป่วย
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onClickAdd}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <PatientsCard />
      <PatientsCard />
      <PatientsCard />
      <PatientsCard />
      <PatientsCard />

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bnav}
        style={{ display: 'none' }}
      >
        <BottomNavigationAction label="ที่ดูแล" icon={<RestoreIcon />} />
        <BottomNavigationAction label="ทั้งหมด" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </div>
  );
}
