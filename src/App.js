import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Chapters from './components/Chapters';
import Lessons from './components/Lessons';
import SingleLesson from './components/SingleLesson';
import * as Constants from './constants';


function App() {

    return (
      <ApolloProvider client={Constants.client}>
        <div className="App">
          <Router>  
            <Navigation />
  
            <Switch>
              <Route exact path="/books">
                <Books />
              </Route>
  
              <Route path="/books/:bookId">
                <Chapters />
              </Route>
  
              <Route path="/book/:bookId/chapter/:chapterId">
                <Lessons />
              </Route>
  
              <Route path="/chapter/:chapterId/lesson/:lessonId">
                <SingleLesson />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
}

function Home() {
  return (
    <div>
      <h1>Bienvenue sur "Le Livre Scolaire"</h1>
    </div>
  )
}

export default App;