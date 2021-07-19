import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Khuiban-aong
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(1),
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

export default function SignUp() {
  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          alt="Khuiban-aong"
          src="/static/images/avatar/1.jpg"
          className={classes.avatar}
        />
        <Typography component="h1" variant="h5">
          Khuiban-aong
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <input
                type="hidden"
                id="line_id"
                name="line_id"
                required
                value=""
              />
              <TextField
                name="cardID"
                variant="outlined"
                required
                fullWidth
                id="cardID"
                label="เลขบัตรประชาชน"
                error={true ? '' : 'โปรดระบุเลขบัตรประชาชนให้ถูกต้อง.'}
                helperText={true ? '' : 'โปรดระบุเลขบัตรประชาชนให้ถูกต้อง.'}
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
                required
                fullWidth
                id="Agency"
                label="สังกัด/หน่วยงาน"
                name="Agency"
                error={true ? '' : 'โปรดระบุสังกัด/หน่วยงานให้ถูกต้อง.'}
                helperText={true ? '' : 'โปรดระบุสังกัด/หน่วยงานให้ถูกต้อง.'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Position"
                label="ตำแหน่ง"
                id="Position"
                error={true ? '' : 'โปรดระบุตำแหน่งให้ถูกต้อง.'}
                helperText={true ? '' : 'โปรดระบุตำแหน่งให้ถูกต้อง.'}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="ฉันยอมรับเงื่อนไขการใช้งาน."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            สมัครสมาชิก
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.cancel}
          >
            ยกเลิก
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
