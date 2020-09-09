import React, { useState }  from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Books from './components/Books';
import Chapters from './components/Chapters';
import Lessons from './components/Lessons';
import SingleLesson from './components/SingleLesson';
import * as Constants from './constants';
import NotFound from './components/NotFound';


function App() {
    const [subject, setSubject] = useState('');

    function handleSubject(value) {
        setSubject(value);
    }

    return (
      <ApolloProvider client={Constants.client}>
        <div className="App">
          <Router>  
            <Navigation />
  
            <Switch>
              <Route exact path="/">
                <Home onSub={handleSubject} />
              </Route>
              <Route exact path="/books" component={Books} />
              <Route path="/book/:bookId" component={Chapters} />
              <Route path="/:bookId/chapter/:chapterId" component={Lessons} />
              <Route path="/:bookId/:chapterId/lesson/:lessonId" component={SingleLesson}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
}


export default App;