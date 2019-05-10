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

    handleCreateAccountClick = () => {
      if (this.state.loginName) {
        this.props.createUser(this.state.loginName)
      }
    }

  render() {

    const {loginName} = this.state
    const {updateLoginName, handleSignInClick, handleCreateAccountClick} = this

    return (
      <div className="hompepageItem">
        <Header as='h2'>Sign In/Create Account</Header>
        <Input focus placeholder='Username...' value={loginName} onChange={updateLoginName} /><br /><br />
        <Button onClick={handleSignInClick}>Sign In</Button>
        <Divider horizontal>or</Divider>
        <Button onClick={handleCreateAccountClick}>Create Account</Button>
      </div>
    )
  }

}

export default SignIn;
