import React, { Component } from 'react'
import './App.css'
import Listing from '../src/components/listing'
import {Switch,BrowserRouter,Route,Redirect,NavLink} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/"><Listing/></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}
