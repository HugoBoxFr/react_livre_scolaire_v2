import React  from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Chapters from './components/Chapters';
import Lessons from './components/Lessons';
import SingleLesson from './components/SingleLesson';
import * as Constants from './constants';
import NotFound from './components/NotFound';


function App() {
    return (
      <ApolloProvider client={Constants.client}>
        <div className="App">
          <Router>  
            <Navigation />
  
            <Switch>
              <Route exact path="/" component={Home} />
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

const Home = () => {
  return <h1>Bienvenue sur "Le Livre Scolaire"</h1>;
}

export default App;