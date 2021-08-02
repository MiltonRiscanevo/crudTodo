import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import CreateTodo from './CreateTodo'


const TodoContainer= () => {
    const initPromise = async (value) => {
        const response = await axios ({
            method: 'GET',
            url: `https://todos-go.herokuapp.com/api/todos`,
            data: value
        })
        response.data.todos.map(todo => todo)         
    }   
    
    const [state, setstate] = useState(initPromise() )
    
    useEffect(() => {
        if(setstate){
            const promise = async (value) => {
                const response = await axios ({
                    method: 'GET',
                    url: `https://todos-go.herokuapp.com/api/todos`,
                    data: value
                })
                response.data.todos.map(todo => todo)         
            }   
            promise()
        }
    }, [setstate])

    
    return(
        <Fragment>
            <CreateTodo state={state}/> 
        </Fragment>
    )
}

export default TodoContainer