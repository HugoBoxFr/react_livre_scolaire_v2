import React, { useState } from 'react';
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
  // const [lesson, setLesson] = useState('');

    return (
      <ApolloProvider client={Constants.client}>
        <div className="App">
          <Router>  
            <Navigation />
  
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route path="/book/:bookId" component={Chapters} />

              <Route path="/:bookId/chapter/:chapterId">
                {/* <Lessons updateLesson={sortLesson}/> */}
                <Lessons />
              </Route>

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

// const sortLesson = (props) => {
//   // let lessonList = props[0];
//   // let lessonId = props[1];
//   // let lessonSelected = lessonList.filter(elt => elt.id === lessonId);
//   console.log(lessonSelected)
// }

export default App;