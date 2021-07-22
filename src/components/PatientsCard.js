import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ImageUploadCard from './ImageUpload';
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
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function PatientsCard({ pFname, pLname, pAddr }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onClickEdit = () => {
    window.location.href = '/PatientsEdit';
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={'data:image/jpeg;base64,'}
            >
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
                onClick={handleClickOpen}
              >
                <EditIcon />
              </IconButton>
            </CardActions>
          }
          title={pFname + ' ' + pLname}
          subheader={pAddr}
        />
      </Card>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              แก้ไขข้อมูลผู้ป่วย
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              บันทึก
            </Button>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <ImageUploadCard />
            <form className={classes.form} noValidate onSubmit={}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="cardID"
                    variant="outlined"
                    required
                    fullWidth
                    id="cardID"
                    type="number"
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
                    error={true ? '' : 'โปรดระบุเบอร์โทรศัพท์ถูกต้อง.'}
                    helperText={true ? '' : 'โปรดระบุเบอร์โทรศัพท์ถูกต้อง.'}
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
                    minRows={3}
                    id="Position"
                    error={true ? '' : 'โปรดระบุที่อยู่ให้ถูกต้อง.'}
                    helperText={true ? '' : 'โปรดระบุที่อยู่ให้ถูกต้อง.'}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.cancel}
              >
                ลบข้อมูล
              </Button>
            </form>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
