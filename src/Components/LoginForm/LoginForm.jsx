import React from 'react';
import './LoginForm.css';
import logo1 from '../Assets/img/logo.png';

const LoginForm = () => {
  return (
    <div className = 'wrapper'>
        <form action=''>
            <div className='fondo'>
                <img src={logo1} alt='' className='estilo-logo'/>
            </div>

            <div className = "input-box">
                <input type="text" placeholder='USUARIO' required/>
            </div>

            <div className = "input-box">
                <input type="password" placeholder='CONTRASEÑA' required/>
            </div>

            <button type='submit'>INGRESAR</button>
        </form>
    </div>
  )
}

export default LoginForm