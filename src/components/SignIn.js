import React from 'react';
import { Header, Input, Divider, Button } from 'semantic-ui-react';

const SignIn  = () => (
  <div className="hompepageItem">
    <Header as='h2'>Sign In</Header>
    <Input focus placeholder='Username...' /><br /><br />
    <Button>Sign In</Button>
    <Divider horizontal>or</Divider>
    <Button>Create Account</Button>
  </div>
);

export default SignIn ;
