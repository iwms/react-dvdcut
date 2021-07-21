import 'date-fns';
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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { alpha } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import ReportCard from './ReportCard';

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

export default function Report() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    setSelectedDate2(date);
  };
  const handleDateChange2 = date => {
    setSelectedDate2(date);
    if (date < selectedDate) {
      setSelectedDate2(selectedDate);
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onClickAdd = () => {
    window.location.href = '/PatientsAdd';
  };
  const handleClose = () => {
    setSelectedDate(new Date());
    setSelectedDate2(new Date());
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
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
          >
            <PictureAsPdfIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title} align="center">
            รายงาน
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
          >
            <DateRangeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">แสดงข้อมูลตามช่วงเวลา</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="ระบุวันที่เริ่มต้น"
                format="dd/MM/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog2"
                label="ระบุวันที่สิ้นสุด"
                format="dd/MM/yyyy"
                fullWidth
                value={selectedDate2}
                onChange={handleDateChange2}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={handleClose} color="primary">
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
