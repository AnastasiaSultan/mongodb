
import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';

const LoginForm = (props)=>{

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control 
                    onChange={(e)=>{setLogin(e.target.value)}}
                type="text" placeholder="Enter Login" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" placeholder="Password" />
            </Form.Group>

            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    onChange={(e)=>{setName(e.target.value)}}
                type="text" placeholder="Enter Name" />
            </Form.Group>

            <Button onClick={()=>{props.login(login,password, name)}}>Registration</Button>
        </Form>
    )
}

export default LoginForm