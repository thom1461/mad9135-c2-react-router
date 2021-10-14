import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import UserList from '../UserList/UserList';
import AddressList from '../AddressList/AddressList';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/userList">
            <UserList />
          </Route>
          <Route path="/addressList">
            <AddressList />
          </Route>
          <Route path="/404">
            <Not />
          </Route>
          <Route
            path="/"
            exact
            render={(props) => {
              return (
                <div className="home" style={{ padding: '1rem' }}>
                  <p>This is the home-ish page</p>
                  <Home manually={props} isAlive={true} anything={1} />
                </div>
              );
            }}
          />
          <Redirect to="/404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
