import React, { Component } from 'react';
import { Header, Input, Divider, Button } from 'semantic-ui-react';

class SignIn extends Component {

    state = {
      loginName: ''
    }

    updateLoginName = ({target: {value: loginName}}) => {this.setState({loginName})}

    handleSignInClick = () => {
      if (this.state.loginName) {
        this.props.signIn(this.state.loginName)
      }
    }

  render() {

    const {loginName} = this.state
    const {updateLoginName, handleSignInClick} = this

    return (
      <div className="hompepageItem">
        <Header as='h2'>Sign In</Header>
        <Input focus placeholder='Username...' value={loginName} onChange={updateLoginName} /><br /><br />
        <Button onClick={handleSignInClick}>Sign In</Button>
        <Divider horizontal>or</Divider>
        <Button >Create Account</Button>
      </div>
    )
  }

}

export default SignIn;
