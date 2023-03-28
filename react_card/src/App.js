import React from 'react'
import './App.css'
import Home from './Components/Home'
import Upper from './Components/Upper'
// import Page404 from './Components/Page404'
import {BrowserRouter as Router, Routes,Route, Link, Navigate} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import User1 from './Components/User1'
import User2 from './Components/User2'
import User3 from './Components/User3'
import Form from './Form'
import Protected from './Components/Protected'
export default function App() {
  return (
    <div className='main'>
      <Router>
        <Upper/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Protected Component={Home}/>} />
          <Route path='/contact/' element={<Contact />}>
            <Route path='user1'element={<User1/>}/>
            <Route path='user2'element={<User2/>}/>
            <Route path='user3'element={<User3/>}/>
          </Route>
          <Route path='/user1/:name' element={<User1 />} />
          <Route path='/form' element={<Form />} />
          <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </div>
    );
}
