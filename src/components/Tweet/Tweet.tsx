import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { Menu, MenuItem } from '@material-ui/core';
import { ImageList } from '../ImageList/ImageList';
import { removeTweet } from '../../store/ducks/tweets/actionCreators';
import { useDispatch } from 'react-redux';

type TweetPropsType = {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyles>
  createdAt: string
  images?: string[]
  user: {
    fullName: string,
    userName: string,
    avatarUrl: string,
    email: string,
  }
}

export const Tweet: React.FC<TweetPropsType> = (
  {
    _id,
    text,
    classes,
    user,
    createdAt,
    images,
  }
) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
    console.log('delete');
    handleClose(event);
    if (window.confirm('Вы действительно хотите удалить твит?')) {
      dispatch(removeTweet(_id));
    }
  };

  return (
    <a className={classes.tweetWrapper} onClick={handleClickTweet}
       href={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweet, classes.tweetsHeader)}
        variant={'outlined'}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullName}`}
          src={user.avatarUrl}
        />
        <div className={classes.tweetContent}>
          <div className={classes.tweetHeader}>
            <div>
              <b>{user.userName}</b>&nbsp;
              <span
                className={classes.tweetUserName}>@{user.email}</span>&nbsp;
              <span className={classes.tweetUserName}>&middot;</span>&nbsp;
              <span className={classes.tweetUserName}>
                {formatDate(new Date(createdAt))}
              </span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon/>
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Редактировать твит
                </MenuItem>
                <MenuItem onClick={(e) => handleRemove(e)}>
                  Удалить твит
                </MenuItem>
              </Menu>
            </div>
          </div>
          <Typography variant={'body1'} gutterBottom>
            {text}
            {images && (
              <ImageList images={images}/>
            )}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <ChatBubbleOutlineIcon/>
              </IconButton>
            </div>
            <div>
              <IconButton>
                <RepeatIcon/>
              </IconButton>
            </div>
            <div>
              <IconButton>
                <FavoriteBorderIcon/>
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ReplyOutlinedIcon/>
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </a>
  );
};