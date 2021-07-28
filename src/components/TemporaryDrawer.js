import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      
    >
      <List>
        <ListItem button key={'ลบข้อมูลขยะ'}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary={'ลบข้อมูลขยะ'} />
        </ListItem>
      </List>

      <List>
        <ListItem button key={'แก้ไขข้อมูลขยะ'}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary={'แก้ไขข้อมูลขยะ'} />
        </ListItem>
      </List>

      <List>
        <ListItem button key={'ดูข้อมูลขยะ'}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={'ดูข้อมูลขยะ'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={'bottom'}>
          <Button onClick={toggleDrawer('bottom', true)}>{'bottom'}</Button>
          <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
          >
            {list('bottom')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
