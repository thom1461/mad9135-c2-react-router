import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import UserList from '../UserList/UserList';
import UserDetails from '../UserDetails/UserDetails';
import AddressList from '../AddressList/AddressList';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';
//import { Switch, Route, Redirect, useLocation} from 'react-router-dom';
//import { useState, useEffect } from 'react';


function App(props) {
//   const { pathname } = useLocation();
//   const [information, setList] = useState([]);

//   useEffect(() => {
//     (async function (){
//       if (pathname.indexOf('/userList') > -1) {
//         let url = `https://randomuser.me/api/?results=25&seed=thom1461&format=json&nat=ca`;
//         let resp = await fetch(url);
//         let data = await resp.json();
//         setList(data.results);
//       }
//     })();
//   }, [pathname]);

//   function findUser(id) {
//     let fu = information.find((item, index) => parseInt(id) === index + 1);
//     console.log("User ID:", fu);
//     return information.find((item, index) => parseInt(id) === index + 1);
// }

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/userList">
            <UserList />
            {/* <Route path="/userList/:id">
              <UserDetails />
            </Route> */}
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
                  <p></p>
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