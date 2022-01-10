import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home'
import Usercrud from '../components/user/userCrud'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/user" component={Usercrud}/>
        <Redirect from="*" to='/' />
    </Switch>