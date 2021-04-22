import './App.css';
// import * as ReactBootStrap from 'react-bootstrap';
import ContentTable from './components/ContentTable';
import Login from './components/Login'
import firebase, { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/Logout';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Watch List</h1>
        <Logout/>
      </header>
      <section>
        {user ? <ContentTable/> : <Login/>}
      </section>

    </div>
  );
}

export default App;
