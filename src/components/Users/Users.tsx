import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import Divider from '@material-ui/core/Divider';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { useSelector } from 'react-redux';
import { selectTagsItems } from '../../store/ducks/tags/selectors';

export const Users = () => {
  const classes = useHomeStyles();
  const items = useSelector(selectTagsItems);

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader}
             variant={'outlined'}>
        <b>Кого читать</b>
      </Paper>
      <List>
        {
          items.map(item => (
            <ListItem className={classes.rightSideBlockItem}>
              <ListItemAvatar>
                <Avatar
                  alt="Yumi Chu"
                  src="https://images.unsplash.com/photo-1602995660357-20e5ebaa4d37?ixlib= rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </ListItemAvatar>
              <ListItemText
                primary={'Gran Tour'}
                secondary={
                  <Typography component={'span'} variant={'body2'}>
                    @GranTour
                  </Typography>
                }
              />
              <Button color={'primary'}>
                <PersonAddIcon/>
              </Button>
            </ListItem>
          ))
        }
        <Divider component={'li'}/>
      </List>
    </Paper>
  );
};