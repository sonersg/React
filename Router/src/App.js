


import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import NewUser from './components/NewUser';
import Error404 from './components/Error404';
import './App.css';

import {NavLink, Routes, Route} from "react-router-dom"
import UserLayout from './UserLayout';




function App() {
  return <>
    <Routes location='/users'>
      <Route path='/users' element={<h1>Extra Content</h1>} />
    </Routes>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/users' element={<Users />} /> */}
      <Route path='/users' element={<UserLayout />} >
        <Route index element={<Users />} />
        <Route path=':id' element={<User />} />
        <Route path='new' element={<NewUser />} />
      </Route>
      {/* <Route path='/users/:id' element={<User />} />
      <Route path='/users/new' element={<NewUser />} /> */}
      <Route path='*' element={<Error404 />} />
    </Routes>

  </>
}

export default App;
