import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const[users,setUsers]=useState([])
    const[error,setError]=useState('')

    useEffect(()=>{
        const dataURL="https://jsonplaceholder.typicode.com/users"
        axios.get(dataURL).then((response)=>{
            setUsers(response.data)
            console.log(response.data)

        }).catch((error)=>{
            setError(error)

        })
    },[])
  return (
    <div>
        <section className='p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                              users.length > 0 ?
                              <React.Fragment>
                                  <table className='table table-hover text-center table-primary table-striped'>
                                      <thead className='bg-dark text-primary'>
                                          <tr>
                                              <th>ID</th>
                                              <th>NAME</th>
                                              <th>USERNAME</th>
                                              <th>EMAIL</th>
                                              <th>CITY</th>
                                          </tr>
  
                                      </thead>
                                      <tbody>
                                          {
                                              users.map((user)=>{
                                                  return(
                                                      <tr key={user.id}>
                                                          <td>{user.id}</td>
                                                          <td>{user.name}</td>
                                                          <td>{user.username}</td>
                                                          <td>{user.email}</td>
                                                          <td>{user.address.city}</td>
                                                          
                                                      </tr>
                                                  )
                                              })
                                          }
                                      </tbody>
  
                                  </table>
                              </React.Fragment>:null
                          
  
                        }
                        
                          
                    </div>
                </div>
            </div>
             
        </section>
        
        
       

    </div>
  )
}

export default Products