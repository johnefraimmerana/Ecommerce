import React from 'react';
import {Button, FormLabel, ModalBody} from 'react-bootstrap';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { FormGroup, FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';

const modal_styles ={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    backgroundColor:'FFF',
    padding:'50px',
    zIndex:1000,
    width: '400px'
}

const overlay_styles={
    position:'fixed',
    top:0,
    left:0,
    right: 0,
    bottom:0,
    backgroundColor:'rgb(0,0,0,.7)',
    zIndex:1000
}
function Login(props)
{
    if(!props.isOpen) return null;

    return(<>
    <div style={overlay_styles}/>
    <div style={modal_styles}>
    <ModalDialog>
  <ModalHeader>
    <ModalTitle>Login</ModalTitle>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder="username"/>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="password"/>
        <FormControl type="text" placeholder="username/Email"/>
    </FormGroup>
  </ModalBody>

  <ModalFooter>
    <Button className="btn btn-sm" variant="success">Login</Button>
    <Button className="btn btn-sm" variant="danger" onClick={props.close}>Cancel</Button>
  </ModalFooter>
</ModalDialog>
</div>
    </>)
}

export default Login;
