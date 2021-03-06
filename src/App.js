import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import awsExports from './aws-exports'
import { Image } from './pages/Image'
import {
  AddPrivateNote,
  EditPrivateNote,
  ListPrivateNotes
} from './pages/PrivateNote'
import { AddTask, EditTask, ListTasks } from './pages/Task'

Amplify.configure(awsExports)

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Tasks</Link>
            </li>
            <li>
              <Link to='/private-notes'>Private Notes</Link>
            </li>
            <li>
              <Link to='/image'>Image</Link>
            </li>
          </ul>
        </nav>

        <section>
          <main>
            <Switch>
              <Route path='/' exact={true}>
                <ListTasks />
              </Route>
              <Route path='/tasks/add'>
                <AddTask />
              </Route>
              <Route path='/tasks/add' exact={true}>
                <AddTask />
              </Route>
              <Route path='/tasks/:id'>
                <EditTask />
              </Route>
              <Route path='/private-notes' exact={true}>
                <ListPrivateNotes />
              </Route>
              <Route path='/private-notes/add' exact={true}>
                <AddPrivateNote />
              </Route>
              <Route path='/private-notes/:id'>
                <EditPrivateNote />
              </Route>
              <Route path='/image' exact={true}>
                <Image />
              </Route>
            </Switch>
          </main>
        </section>
      </div>
    </Router>
  )
}

const AuthStateApp = () => {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <Fragment>
      <div className='App'>
        <div>Hello, {user.username}</div>
        <AmplifySignOut />
      </div>
      <App />
    </Fragment>
  ) : (
      <AmplifyAuthenticator />
    )
}

export default AuthStateApp
