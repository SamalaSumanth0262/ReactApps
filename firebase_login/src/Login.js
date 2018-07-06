import React from 'react';
import fire from './config/Fire';


class Login extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.signup=this.signup.bind(this);
  }
  login(e)
  {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error)=>{
      console.log(error);
    });
  }
  signup(e)
  {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error)=>{
      console.log(error);
    });
  }
  handleChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
  }
  render()
  {
    return(
      <form>
        <label>email :<input value={this.state.email} onChange={this.handleChange} type="email" name="email" /></label>
        <label>password<input value={this.state.password} onChange={this.handleChange} type="password" name="password" /></label>
        <button type="submit" onClick={this.login}>Login</button>
        <button onClick={this.signup}>SignUp</button>
      </form>
    );
  }
}
export default Login;
