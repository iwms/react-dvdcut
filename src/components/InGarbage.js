import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InGarbageCard from './InGarbageCard';
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
const garbages = [
  {
    _id: '60fb8e2e5d2c8029c8efbf59',
    GarbageTypeID: '0',
    GarbageStatusID: '1',
    GarbageWeightID: '',
    SAOAprroveID: '',
    SDHAprroveID: '',
    PatientID: '1',
    LineID: 'Ub5b764acf032b00f37575df1ba68e54d'
  },
  {
    _id: '60fb8e2e5d2c8029c8efbf59',
    GarbageTypeID: '0',
    GarbageStatusID: '1',
    GarbageWeightID: '',
    SAOAprroveID: '',
    SDHAprroveID: '',
    PatientID: '1',
    LineID: 'Ub5b764acf032b00f37575df1ba68e54d'
  },
  {
    _id: '60fb8e2e5d2c8029c8efbf59',
    GarbageTypeID: '0',
    GarbageStatusID: '1',
    GarbageWeightID: '',
    SAOAprroveID: '',
    SDHAprroveID: '',
    PatientID: '1',
    LineID: 'Ub5b764acf032b00f37575df1ba68e54d'
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

export default function InGarbage() {
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
            ข้อมูลขยะ
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <InGarbageCard />

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
            defaultValue="0.00"
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
