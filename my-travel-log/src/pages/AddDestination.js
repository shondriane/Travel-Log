import React from 'react'
import {  useState } from 'react'
import axios from 'axios'
import '../styles/form.css'

const AddDestination =()=>{
    const initialState={
        country: "",
        image: "",
    }
    
    const [formState, setFormState]= useState(initialState);
    
    
      const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3001/api/destination',formState)
    setFormState(initialState)
    console.log(formState)
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
   
    return(
        <div className="formDiv">
            <form className="classes.form" onSubmit={handleSubmit}>
<h1>Creating new Destination</h1>
<label htmlFor="country">Country:</label>
    <input type="text" id="country" onChange={handleChange}value={formState.country}/>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" onChange={handleChange} value={formState.image}></textarea>
   
    <button type="submit">Send</button>
            </form>

        </div>
    )
}

export default AddDestination