import React from 'react'
import './App.css'
import {SignIn} from './pages/SignIn'
import {Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/signin/'} render={() => <SignIn/>}/>
                <Route path={'/'} render={() => <Home/>}/>
            </Switch>
        </div>
    )
}

export default App
