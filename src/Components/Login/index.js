import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import { useState } from 'react';

function Login() {

  const [Tab_EventKey, Set_Tab_EventKey] = useState("SignIn_EventKey");

  return (
    <Tabs
      defaultActiveKey={Tab_EventKey}
      id="justify-tab-example"
      className="mb-3"
      justify
      activeKey={Tab_EventKey} onSelect={(k) => Set_Tab_EventKey(k)}
    >
      <Tab eventKey="SignIn_EventKey" title="SignIn">
        <SignIn />
        <label onClick={(k) => Set_Tab_EventKey('SignUp_EventKey')} > Don't have an account? Sign Up </label>
      </Tab>
      <Tab eventKey="SignUp_EventKey" title="SignUp">
        <SignUp />
        <label onClick={(k) => Set_Tab_EventKey('SignIn_EventKey')} > Already have an account? Sign in </label>
      </Tab>
    </Tabs>
  );
}

export default Login;