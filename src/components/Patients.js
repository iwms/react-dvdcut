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
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
import ImageUploadCard from './ImageUpload';
import PatientsCard from './PatientsCard';
import PatientsAddDialog from './PatientsAddDialog';

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
  appBar2: {
    position: 'relative'
  },
  title2: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Patients() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [patients, setPatients] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [pID, setPID] = React.useState(1);
  const [pFname, setPFname] = React.useState('');
  const [pLname, setPLname] = React.useState('');
  const [pTel, setPTel] = React.useState('');
  const [pAddr, setPAddr] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setPID('');
    setPFname('');
    setPLname('');
    setPTel('');
    setPAddr('');
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onClickSave = () => {
    if (pID != '' && pFname != '' && pLname != '' && pAddr != '') {
      addPatient(pID, pFname, pLname, pAddr);
    }
    setOpen(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (allowRules == '') {
      swal('???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????!');
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

  function addPatient(pID, pFname, pLname, pAddr, pProfile) {
    const newPatient = { pID, pFname, pLname, pAddr, pProfile };
    setPatients([newPatient, ...patients]);
  }

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
            ???????????????????????????????????????
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
      {patients.map(patient => (
        <PatientsCard
          key={patient.pID}
          pFname={patient.pFname}
          pLname={patient.pLname}
          pAddr={patient.pAddr}
        />
      ))}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar2}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title2}>
              ??????????????????????????????????????????????????????
            </Typography>
            <Button autoFocus color="inherit" onClick={onClickSave}>
              ??????????????????
            </Button>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <ImageUploadCard />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="cardID"
                    variant="outlined"
                    required
                    fullWidth
                    id="cardID"
                    label="??????????????????????????????????????????"
                    error={true ? '' : '????????????????????????????????????????????????????????????????????????????????????????????????.'}
                    helperText={true ? '' : '????????????????????????????????????????????????????????????????????????????????????????????????.'}
                    onChange={e => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 13);
                      setPID(e.target.value);
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
                    label="????????????"
                    error={true ? '' : '??????????????????????????????????????????????????????????????????.'}
                    helperText={true ? '' : '??????????????????????????????????????????????????????????????????.'}
                    onChange={e => {
                      setPFname(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="?????????????????????"
                    name="lastName"
                    error={true ? '' : '???????????????????????????????????????????????????????????????????????????.'}
                    helperText={true ? '' : '???????????????????????????????????????????????????????????????????????????.'}
                    onChange={e => {
                      setPLname(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="number"
                    id="Agency"
                    label="???????????????????????????????????????"
                    name="Agency"
                    error={true ? '' : '?????????????????????????????????????????????????????????????????????????????????????????????.'}
                    helperText={true ? '' : '?????????????????????????????????????????????????????????????????????????????????????????????.'}
                    onChange={e => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10);
                      setPTel(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="Position"
                    label="?????????????????????"
                    id="Position"
                    error={true ? '' : '???????????????????????????????????????????????????????????????????????????.'}
                    helperText={true ? '' : '???????????????????????????????????????????????????????????????????????????.'}
                    onChange={e => {
                      setPAddr(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
