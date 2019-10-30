import React from 'react';

const Login = (props) => {
  return (
    <div className='login container'>
      <h1 className="title">Welcome to join us</h1>
      <div className="subtitle">Please sign in to continue</div>
      <form action="">
        <label htmlFor='username'>Username</label>
        <input type="text" name='username'/>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'/>
        <br/>
        <button type="submit">Login</button>
        <br/>
        <a href="">Register</a>
      </form>
    </div>
  );
};

export default Login;
