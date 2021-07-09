import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FrontPage from './components/front page/frontPage'
import EventPage from './components/event page/eventPage'
import TestPage from './components/test page/testPage'
import CoursePage from './components/courses page/coursesPage'
import SignIn from './components/forms/signIn'
import SignUp from './components/forms/signUp'
import SelectionPage from './components/Selection Page/SelectionPage'
import ReactPage from './components/courses page/react';
import Angular from './components/courses page/Angular';
import Csharp from './components/courses page/Csharp';
import Node from './components/courses page/Node';
import Blender from './components/courses page/Blender'
import MongoDB from './components/courses page/MongoDB'
import TestSelectionPage from './components/test page/testSelectionPage'
import Accordion from './components/courses page/Course components/Accordion'

function App() {
  return (
    <>


      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path='/events' component={EventPage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path='/courses/1' component={ReactPage} />
        <Route exact path='/courses/2' component={Angular} />
        <Route exact path='/courses/6' component={Csharp} />
        <Route exact path='/courses/3' component={Node} />
        <Route exact path='/courses/4' component={Blender} />
        <Route exact path='/courses/5' component={MongoDB} />
        <Route exact path='/selection' component={SelectionPage} />
        <Route exact path='/testselection' component={TestSelectionPage} />
      </Switch>
    </>
  )
}

export default App


