import './App.css';
// import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieForm from './components/MovieForm';
import ContentTable from './components/ContentTable';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path='/' component={ Form }/>
          <Route path='/form' component={ Form }/>
          <Route path='/list' component={ List }/>
        </Switch>
      </Router> */}
      {/* <MovieForm className='movieForm'/> */}
      <ContentTable className='contentTable'/>

    </div>
  );
}

export default App;
