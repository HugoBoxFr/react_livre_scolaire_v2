import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Navigation from './components/Navigation';
import BooksList from './components/BooksList';
import * as Constants from './constants';


function App() {
  return (
    <div className="App">
      <Router>  
        <Navigation />

        <Switch>
          {/* <Route exact path="/livres/:id">
            <div className="App">
              <ApolloProvider client={client}>
                <Book id={1339497} />
              </ApolloProvider>
            </div>
          </Route> */}

          {/* <Route exact path="/livres">
            <div className="App">
              <ApolloProvider client={client}>
                <BooksList getId={(e) => { getId(e) }} />
              </ApolloProvider>
            </div>
          </Route> */}

          <Route exact path="/livres">
            <div className="App">
              <ApolloProvider client={Constants.client}>
                <BooksList />
              </ApolloProvider>
            </div>
          </Route>

          <Route exact path="/">
            <div className="App">
              <h1>Bienvenue sur "Le Livre Scolaire"</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// function getId(id) {
//   return id;
// }


export default App;
