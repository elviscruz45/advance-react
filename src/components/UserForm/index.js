import React , {Fragment} from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {Form, Input, Button,Title,Error} from './styles'

export const UserForm=({error,onSubmit,title,disabled})=>{
    const email=useInputValue('')
    const password=useInputValue('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        onSubmit({
            email:email.value,
            password:password.value})
    }

    return(
    <Fragment>
    <Form onSubmit={handleSubmit} disabled={disabled}>
    <Title>{title}</Title>
    <Input disabled={disabled} placeholder='Email' {...email}/>
    <Input disabled={disabled} placeholder='Password' type='password' {...password}/>

    <Button disabled={disabled}>{title}</Button>
    {error && <Error> {error} </Error> }

    </Form>
    </Fragment>
    )
}

