import React from 'react'
import {  useState } from 'react'
import axios from 'axios'
import '../styles/form.css'

const AddDestination =()=>{
    const BASE_URL = '/api'
    const initialState={
        country: "",
        image: "",
    }
    
    const [formState, setFormState]= useState(initialState);
    
    
      const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post(`{BASE_URL}/destination`,formState)
    setFormState(initialState)
    console.log(formState)
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
   
    return(
        <div className="formDiv">
            
            <form className="classes.form" onSubmit={handleSubmit}>
                <div className ="form">
<h1>Creating new Destination</h1>
<label htmlFor="country">Country:</label>
    <textarea type="text" id="country" onChange={handleChange}value={formState.country}/>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" onChange={handleChange} value={formState.image}></textarea>
   
    <button type="submit">Send</button>
    </div>
            </form>

        </div>
    )
}

export default AddDestination