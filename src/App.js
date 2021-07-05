
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Button} from 'react-bootstrap';

import LoginForm from './components/loginForm';
import Welcome from './components/welcome';

function App() {

  // useEffect(()=>{
  //   console.log('useEffect()')

  //   fetch('/api/users').then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // },[])

  const [status,setStatus] = useState(false)
  const [text,setText] = useState('')

  const doLogin = (l,p)=>{
      console.log('doLogin()',l,p)

      fetch(`/api/login`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login:l,password:p,asd:true}) // body data type must match "Content-Type" header
      }).then(
        (response) =>{
            console.log('response',response)
            if (response.status != 200) {
              alert('Wrong data')
            }else{
              setStatus(true);
              return response.json()
            }
        }
      ).then(
        (resp)=>{
          console.log('resp',resp)
          setText(JSON.stringify(resp))
        }
      )

  }
  

  const doLogout = ()=>{
    //console.log('doLogout()')
    setStatus(false);
}

  return (
    <>
    <Container>
        {(!status) && (<LoginForm login={doLogin} />)}
        {(status) && (<Welcome logout={doLogout} text={text} />)}
    </Container>
    </>
  );
}

export default App;
