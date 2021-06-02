import React, { useEffect } from 'react';
import './App.css';
import { SignIn } from './pages/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { useDispatch } from 'react-redux';
import { authApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const checkAuth = async () => {
    try {
      const { data } = await authApi.me();
      dispatch(setUserData(data));
      history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path={'/signin'} render={() => <SignIn/>}/>
        <Route path={'/'} render={() => <Home/>}/>
      </Switch>
    </div>
  );
}

export default App;
