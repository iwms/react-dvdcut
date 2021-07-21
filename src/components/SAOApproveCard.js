import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import Grow from '@material-ui/core/Grow';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
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
    backgroundColor: '#64dd17'
  }
}));

export default function SAOApproveCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(0);

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
  const onClickEdit = () => {
    window.location.href = '/InGarbageEdit';
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              0
            </Avatar>
          }
          action={
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleClickOpen}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ThumbsUpDownIcon />
              </IconButton>
            </CardActions>
          }
          title="ขยะติดเชื้อ #123"
          subheader="น้ำหนัก: 0.00 กิโลกรัม สถานะ: รอการอนุมัติ "
        />
        <Collapse in={false} timeout="auto" unmountOnExit>
          <CardContent />
        </Collapse>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">อนุมัติขยะติดเชื้อ</DialogTitle>
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
            autoFocus
            fullWidth
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ไม่อนุมัติ
          </Button>
          <Button onClick={handleClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={handleClose} color="primary">
            อนุมัติ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
