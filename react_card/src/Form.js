//react hook
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Form() {
  const navigate = useNavigate();
  const login = () => {
    let login = localStorage.getItem('login',true);
    if (login) {
      navigate('/')
    }
  }

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    });
  }
  return (
    <div className=' mainContainer flex'>
      <div className="formContainer">
        <form>
          <legend>Registeration</legend>
          <div className="inputField">
            <input type="text" value={formData.userName} onChange={handleInput} placeholder='Name' name='userName' />
          </div>
          <div className="inputField">
            <input type="email" value={formData.email} onChange={handleInput} placeholder='Email' name='email' />
          </div>
          <div className="inputField">
            <input type="password" value={formData.password} onChange={handleInput} placeholder='Password:' name='password' />
          </div>
          <div className="inputField">
            <input type="password" value={formData.confirmPassword} onChange={handleInput} placeholder='Confirm-Password:' name='confirmPassword' />
          </div>
          <div>
            <button className='btn' onClick={login}>Creat account</button>
            <p>{formData.userName} {formData.password}</p>
          </div>
        </form>
      </div>
    </div>
  )
}
