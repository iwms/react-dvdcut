import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ImageUploadCard from './ImageUpload';

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
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(1, 0, 2)
  },
  cancel: {
    margin: theme.spacing(0, 0, 3)
  },
  formControl: {
    width: '100%',
    margin: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function PatientsAdd() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (allowRules == '') {
      swal('กดยอมรับเงื่อนไขการใช้งานเพื่อสมัครสมาชิก!');
    } else {
      const {
        lineID,
        cardID,
        firstName,
        lastName,
        agency,
        position
      } = e.target.elements;
    }
  };
  const onClickClose = () => {
    window.location.href = '/Patients';
  };
  const onClickSave = () => {
    swal('แก้ไขข้อมูลเรียบร้อยแล้ว!', {
      icon: 'success',
      buttons: false
    });
    window.location.href = '/Patients';
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
            onClick={onClickClose}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title} align="center">
            เพิ่มข้อมูลผู้ป่วย
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onClickSave}
          >
            <SaveAltIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <ImageUploadCard />
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="cardID"
                  variant="outlined"
                  required
                  fullWidth
                  id="cardID"
                  label="เลขบัตรประชาชน"
                  error={true ? '' : 'โปรดระบุเลขบัตรประชาชนให้ถูกต้อง.'}
                  helperText={true ? '' : 'โปรดระบุเลขบัตรประชาชนให้ถูกต้อง.'}
                  onChange={e => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 13);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  error={true ? '' : 'โปรดระบุชื่อให้ถูกต้อง.'}
                  helperText={true ? '' : 'โปรดระบุชื่อให้ถูกต้อง.'}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  error={true ? '' : 'โปรดระบุนามสกุลให้ถูกต้อง.'}
                  helperText={true ? '' : 'โปรดระบุนามสกุลให้ถูกต้อง.'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="Agency"
                  label="เบอร์โทรศัพท์"
                  name="Agency"
                  error={true ? '' : 'โปรดระบุเบอร์โทรศัพท์ให้ถูกต้อง.'}
                  helperText={true ? '' : 'โปรดระบุเบอร์โทรศัพท์ให้ถูกต้อง.'}
                  onChange={e => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="Position"
                  label="ที่อยู่"
                  id="Position"
                  error={true ? '' : 'โปรดระบุที่อยู่ให้ถูกต้อง.'}
                  helperText={true ? '' : 'โปรดระบุที่อยู่ให้ถูกต้อง.'}
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
