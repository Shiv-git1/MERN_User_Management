import './App.css';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/get_all_users" component={AllUsers} />
        <Route path="/add_new_user" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
