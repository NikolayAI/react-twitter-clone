import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTweetData,
  setTweetData
} from '../../../store/ducks/tweet/actionCreators';
import {
  selectTweetData,
  selectTweetIsLoading
} from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../homeTheme';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';

export const FullTweet: React.FC = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectTweetIsLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) dispatch(fetchTweetData(id));
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) return <div className={classes.tweetsCentered}>
    <CircularProgress/>
  </div>;

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>
                @{tweetData.user.username}
              </span>&nbsp;
              <span className={classes.tweetUserName}>
                {format(new Date(tweetData.createdAt), 'H:mm:ss', { locale: ruLang })}
              </span>&nbsp;
              <span className={classes.tweetUserName}>
                {format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', { locale: ruLang })}
              </span>
            </div>
          </Typography>
          {/*<div className={classes.tweetFooter}>*/}
          {/*    <div>*/}
          {/*        <IconButton>*/}
          {/*            <ChatBubbleOutlineIcon/>*/}
          {/*        </IconButton>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*        <IconButton>*/}
          {/*            <RepeatIcon/>*/}
          {/*        </IconButton>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*        <IconButton>*/}
          {/*            <FavoriteBorderIcon/>*/}
          {/*        </IconButton>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*        <IconButton>*/}
          {/*            <ReplyOutlinedIcon/>*/}
          {/*        </IconButton>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweetData.text}
        </Typography>
      </Paper>
    );
    // <Tweet{...tweetData} classes={classes}/>
  }
  return null;
};