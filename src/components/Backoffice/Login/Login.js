import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PopUp from '../PopUp/PopUp';
import './Login.css';
import whiteLogo from '../../../assets/logo/logo_RGB.jpg';
import passwordIcon from '../../../assets/images/Backoffice/password.png';
import userIcon from '../../../assets/images/Backoffice/user.png';

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const [flash, setFlash] = useState('');
  const [messageStatus, setMessageStatus] = useState('');
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [signIn, setSignIn] = useState(false);

  const onSubmit = (data) => {
    fetch('/login/signin',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((res) => {
        console.log('signin ok');
        setSignIn(true);
        setToken(res.token);
        setUser(res.user);
        setFlash(res.message);
        setMessageStatus('success');
        window.setTimeout(() => (props.history.push({pathname: '/backoffice/intro'})), 1500);
      })
      .catch((err) => {
        setMessageStatus('error');
        setFlash('Invalid Email or Password, please try again.');
      });
  };

  console.log(flash);

  return (
    <div className="Login">
      <div className="login-page">
        <div className="login-card">
          <div className="login-card-section">
            <img src={whiteLogo} className="login-logo" alt="AGP" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-card-section login-middle-section">
              <div className="login-field">
                <img src={userIcon} className="login-icons" alt="User input" />
                <input
                  type="email"
                  name="email"
                  ref={register({
                    required: '* Campo obrigatório',
                    minLeght: 2,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Email Inválido',
                    },
                  })}
                />
              </div>
              {errors.email && <div className="form-error">{errors.email.message}</div>}
              <div className="login-field">
                <img src={passwordIcon} className="login-icons" alt="Password input" />
                <input
                  type="password"
                  name="password"
                  ref={register({ required: '* Campo obrigatório', minLeght: 2 })}
                />
              </div>
              {errors.password && <div className="form-error">{errors.password.message}</div>}
            </div>
            <div className="login-card-section">
              <button className="login-button" type="submit">LOGIN</button>
            </div>
          </form>
          <div className="login-forgot">
            <a href="">Forgot your password?</a>
          </div>
        </div>
      </div>
      <PopUp flashInput={flash} typeMessage={messageStatus} />
    </div>
  );
};

export default Login;
