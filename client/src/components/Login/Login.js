import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
// import { Toaster, Intent } from '@blueprintjs/core';

import { app } from '../../base.js';


class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmail = this.authWithEmail.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false

    }
  }

  authWithEmail() {
    console.log("auth with email")
  }


  authWithEmailPassword(event) {
    const { history } = this.props;

    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if(providers.length === 0) {
          //create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          //they used fb
          this.loginForm.reset()
        } else {
          //they are signed in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user) {
          this.loginForm.reset()
          history.push('/')
        }
      })
      .catch(e => {
        console.log(e);
      })

    console.log("auth with password")
    console.table([{
        email: this.emailInput.value,
        password: this.passwordInput.value
    }])
  }

render() {

return (

<div className="centerItems">
<button style={{width:"20%"}} className="pt-button pt-intent-primary"
onClick={() => {this.authWithEmail()}}>
Login with Email
</button>
<hr style={{marginTop:"10px", marginBottom:"10px"}}/>



<form
  onSubmit={(event) => {
    this.authWithEmailPassword(event)
  }}
  ref={(form) => { this.loginForm = form } }
>
<div style={{marginBottom:"10px"}} className="pt-callout pt-icon-info-sign">
<h5>*If you don't have an account already,</h5>
<h5>please create an account below.</h5>
</div>
<label className="pt-label"><input style={{width: "100%"}} className="pt-input" name="email"
type="email" ref={(input) => { this.emailInput = input}} placeholder="Email"></input>
</label>
<br/>
<label className="pt-label"><input style={{width: "100%"}} className="pt-input" name="password"
type="password" ref={(input) => { this.passwordInput = input}} placeholder="Password"></input>
</label>
<br/>
<input style={{width: "15%"}} type="submit" className="pt-button pt-intent-primary" value="Login"></input>


</form>




</div>







);

};

}


export default withRouter(Login);
