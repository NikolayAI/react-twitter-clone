import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Tweet } from '../../components/Tweet/Tweet';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';
import { useHomeStyles } from './homeTheme';
import { SearchTextField } from '../../components/SearchTextField/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTweetsIsLoading,
  selectTweetsItems
} from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Tags } from '../../components/Tags/Tags';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/BackButton';
import { FullTweet } from './components/FullTweet';
import { Users } from '../../components/Users/Users';

export const Home: React.FC = () => {

  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectTweetsIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth={'lg'}>
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant={'outlined'}>
            <Paper className={classes.tweetsHeader} variant={'outlined'}>
              <Route path={'/home/:any'}>
                <BackButton/>
              </Route>
              <Route path={['/home', '/home/search']} exact>
                <Typography variant={'h6'}>Твиты</Typography>
              </Route>
              <Route path={'/home/tweet'}>
                <Typography variant={'h6'}>Твитнуть</Typography>
              </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes}/>
                </div>
                <div className={classes.addFormBottomLine}/>
              </Paper>
            </Route>
            <Route path={'/home'} exact>
              {isLoading ? (
                <div className={classes.tweetsCentered}><CircularProgress/>
                </div>
              ) : tweets.map(tweet =>
                <Tweet
                  _id={tweet._id}
                  key={tweet._id}
                  classes={classes}
                  text={tweet.text}
                  user={tweet.user}
                  createdAt={tweet.createdAt}
                />
              )}
            </Route>
            <Route path={'/home/tweet/:id'} exact component={FullTweet}/>
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              fullWidth
              variant={'outlined'}
              placeholder={'Поиск по Твиттеру'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={'start'}>
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
            />
            <Tags classes={classes}/>
            <Users/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};