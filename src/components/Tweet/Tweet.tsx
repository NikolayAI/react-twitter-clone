import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import Paper from '@material-ui/core/Paper';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';


type TweetPropsType = {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyles>
  createdAt: string
  user: {
    fullname: string,
    username: string,
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
  }
) => {
  console.log(formatDate(new Date(createdAt)));
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweet, classes.tweetsHeader)}
        variant={'outlined'}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.username}</b>&nbsp;
            <span
              className={classes.tweetUserName}>@{user.email}</span>&nbsp;
            <span className={classes.tweetUserName}>&middot;</span>&nbsp;
            <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
          </Typography>
          <Typography variant={'body1'} gutterBottom>
            {text}
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
    </Link>
  );
};