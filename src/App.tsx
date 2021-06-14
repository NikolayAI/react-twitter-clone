import React, { useEffect } from 'react';
import './App.css';
import { SignIn } from './pages/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingState } from './store/types';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { useHomeStyles } from './pages/Home/homeTheme';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  const classes = useHomeStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);

  const isReady = (
    loadingStatus !== LoadingState.NEVER
    && loadingStatus !== LoadingState.LOADING
  );

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else {
      history.push('/home');
    }
  }, [isAuth, isReady]);

  return (
    <div className="App">
      {
        isReady
          ? <Switch>
            <Route path={'/signin'} render={() => <SignIn/>}/>
            <Route path={'/'} render={() => <Home/>}/>
          </Switch>
          : <div className={classes.centered}>
            <TwitterIcon color={'primary'} style={{ width: 80, height: 80 }}/>
          </div>
      }
    </div>
  );
}

export default App;