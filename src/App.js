import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';

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
      <Form />
      <Table />

    </div>
  );
}

export default App;
