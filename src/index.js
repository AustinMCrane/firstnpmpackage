import React from 'react';

class LoginForm extends React.Component {
  render() {
   return(
    <div>
     <h3>Login Form</h3>
    </div>
   );
  }
}


function saysomething(message) {
  console.log(message)
}
export {
  LoginForm,
  saysomething
}
