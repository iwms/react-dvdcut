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
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    }
  }
}));
export default function FormDialog() {
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
        <DialogTitle id="form-dialog-title">เพิ่มข้อมูลขยะติดเชื้อ</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="ประเภทขยะ"
            type="text"
            fullWidth
            defaultValue="ขยะติดเชื้อ"
            disabled
          />
          <TextField
            margin="dense"
            id="gw"
            label="น้ำหนักขยะ"
            defaultValue="0"
            type="number"
            fullWidth
            disabled
          />
          <TextField
            id="standard-select-currency"
            select
            label="ที่มาของขยะ"
            value={currency}
            onChange={handleChange}
            fullWidth
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
