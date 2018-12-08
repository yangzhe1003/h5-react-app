// import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './index.less'
import Container from './Components/Container/index.jsx'
import Home from './Pages/Home/index.jsx'
import Error from './Pages/Error/index.jsx'

const { BrowserRouter, Route, Link, Switch, HashRouter } = window.ReactRouterDom

document.title='测试项目'

const Routers = () => (
    <HashRouter>
        <Switch>
            <Route path='/error' component={ Error } />
            <Route path='/home' component={ Home } />
            {/* <Route path='/h5-react-app' component={ Container } >
                <Route path='error' component={ Error } />
        
                <Route path='home' component={ Home } />
                
            </Route> */}
        </Switch>
    </HashRouter>
)


const App = ()=> (
    <Routers />
)
   

export default hot(module)(App)

