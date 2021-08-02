import React, {  useEffect, useState } from 'react'
import axios from 'axios';

const CreateTodo = (props) => {
    const [data,setData] = useState(0)

    const dataPromise = async (value) => {
        const response = await axios ({
          method: 'GET',
          url: `https://todos-go.herokuapp.com/api/todos`,
         data: value
        })
         setData(
             
             response.data.todos
             
         )
    }

    
    const deleteUser=(id)=>{
         const newUsers = data.filter(student => student.id !== id)
            setData(
               newUsers
           )
    }
        
    useEffect(()=> {
        
        dataPromise()
            
        },[])

    
    
    return (  
        <table>
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                   {data.length>=0 ?
                        data.map(student => (
                            <tr key="student.id">
                                <td>
                                    {student.student}
                                </td>
                                <td>
                                    {student.task}
                                </td>       
                                <td>
                                    <input type="checkBox"/>
                                    <button onClick={()=>{deleteUser(student.id)}}>Delete</button>
                                </td>
                            
                            </tr> 
                        ))
                    :
                        <tr>
                            <td>Loading...</td>
                        </tr>
                   }
            </tbody>
        </table>
    );
}
 
export default CreateTodo;