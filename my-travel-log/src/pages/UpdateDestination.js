import React from 'react'
import { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

import axios from 'axios'
import '../styles/form.css'

const UpdateDestination =(prop)=>{
    const navigate = useNavigate()
    let { destinationId } = useParams()
    const BASE_URL = '/api'
    
    const getDestinationId = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/destination/${destinationId}`
        )
        console.log(response)
        setFormState(response.data.destination)
       
      }
      useEffect(() => {
        getDestinationId()
      }, [destinationId])

      const initialState={
        country: "",
        image:"",
    }
    const [formState, setFormState]= useState(initialState);
    
      const handleSubmit=(event)=>{
    event.preventDefault();
    axios.put(`${BASE_URL}/${destinationId}`,formState)
    setFormState(initialState)
    navigate('/home')
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
       
    }
    return (
<div className="formDiv">

<form className="classes.form" onSubmit={handleSubmit}>
  <div className="form">
<h1>Update Destination</h1>
<label htmlFor="destination">Country</label>
<textarea id="country" onChange={handleChange} value={formState.country}/>

    <label htmlFor="image">Image Address Link</label>
    <textarea id="image"  onChange={handleChange} value={formState.image}></textarea>

    <button type="submit" className="send">Send</button>
   </div>
</form>
</div>
    )
}

export default UpdateDestination