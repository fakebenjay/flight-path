import React from 'react'
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

export const Location = (props) => (
    <Button className='custom-input' onClick={props.handleClick}>{props.location.formatted_name}</Button>
)
