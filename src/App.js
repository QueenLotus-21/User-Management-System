import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterUser from './component/users/RegisterUser';
import Login from './component/users/Login';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUsers';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='addUser' element={<RegisterUser />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/editUser/:id' element={<EditUser />} />
            <Route path='/viewUser/:id' element={<ViewUser />} />
          </Routes>
        </Router>

      
     
      </div>
    );
  }
}

export default App;
