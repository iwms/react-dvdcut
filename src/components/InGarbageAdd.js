import 'date-fns';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    }
  }
}));
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
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
                format="dd/mm/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="ระบุวันที่สิ้นสุด"
                format="dd/mm/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
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
