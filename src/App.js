import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Chapters from './components/Chapters';
import Lessons from './components/Lessons';
import * as Constants from './constants';


function App() {
  return (
    <ApolloProvider client={Constants.client}>
      <div className="App">
        <Router>  
          <Navigation />

          <Switch>
            <Route exact path="/books">
              <div>
                <Books />
              </div>
            </Route>

            <Route exact path="/">
              <div>
                <h1>Bienvenue sur "Le Livre Scolaire"</h1>
              </div>
            </Route>

            <Route path="/books/:bookId">
              <div>
                <Chapters />
              </div>
            </Route>

            <Route path="/book/:bookId/chapter/:chapterId">
              <div>
                <Lessons />
              </div>
            </Route>

            <Route path="/chapter/:chapterId/lesson/:lessonId">
              <div>
                <p>ok</p>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}


export default App;
