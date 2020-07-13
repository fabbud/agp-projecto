import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import whiteLogo from '../../../assets/logo/logo_RGB.jpg';
import passwordIcon from '../../../assets/images/Backoffice/password.png';
import userIcon from '../../../assets/images/Backoffice/user.png';

const Login = () => {
  //const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => {
  //   axios.post('/email', data)
  //     .then((response) => {
  //       if (response.data.code !== 200) {
  //         setEmailTypeAlert('danger');
  //         setMessageIcon(faTimes);
  //       }
  //       setShowEmailAlert(true);
  //       window.setTimeout(() => setShowEmailAlert(false), 4000);
  //     });
  // };

  return (
    <div className="Login">
      <div className="login-page">
        <div className="login-card">
          <div className="login-card-section">
            <img src={whiteLogo} className="login-logo" alt="AGP" />
          </div>
          <div className="login-card-section login-middle-section">
            <form>
              <div>
                <img src={userIcon} className="login-icons" alt="User input" />
                <input type="text" />
              </div>
              <div>
                <img src={passwordIcon} className="login-icons" alt="Password input" />
                <input type="password" />
              </div>
            </form>
          </div>
          <div className="login-card-section">
              <button className="login-button" type="submit">LOGIN</button>
          </div>
          <div className="login-forgot">
            <a href="">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
