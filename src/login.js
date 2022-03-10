import logo from './imagens/logo.png';
import './style.css';

const Login = () => {

  return(
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <div className='form-login'>
        <input type='email' placeholder='E-mail' className="form-input"/>

        <input type='password' placeholder='Password' className="form-input"/>

        <button type='submit' className="form-button">LOGIN</button>
      </div>
    </div>
  )
}

export default Login;


