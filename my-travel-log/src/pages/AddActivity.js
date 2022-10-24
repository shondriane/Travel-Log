import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/form.css'

const AddActivity =()=>{
    const initialState={
        name: "",
        activity: "",
        description:"",
        image:"",
        destination:"",
        image:"",
        description:""
    
    }
    
    const [formState, setFormState]= useState(initialState);
    const [destinations, setDestinations]=useState([]);
    
    const getDestination = async () => {
        const response = await axios.get(
            'http://localhost:3001/api/destination'
        )
       console.log(response.data.destination)
        setDestinations(response.data.destination)
        
      }
      useEffect(() => {
        getDestination()
      }, [])
    
      const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3001/api/activityDetails',formState)
    setFormState(initialState)
    console.log(formState)
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
   
    return(
        <div className="formDiv">
            <form className="classes.form" onSubmit={handleSubmit}>
<h1>Creating new Activity</h1>
<label htmlFor="name">Name:</label>
    <input type="text" id="name" onChange={handleChange}value={formState.name}/>
<label htmlFor="activity">Type of Activity:</label>
    <select id="activity" onChange={handleChange} value={formState.activity}>
      <option value="Nature&Wildlife">Nature and Wildlife</option>
      <option value="Museum">Museum</option>
      <option value="Food">Food</option>
      <option value="Adventure">Adventure</option>
      <option value="Cruise&Sailing">Cruise and Sailing</option>
      <option value="Beach">Beach</option>
      <option value="Tour">Tour</option>
      <option value="Festival">Festival</option>
      <option value="Show">Show</option>
      <option value="Show">Game</option>
      <option value="Nightlife">Nightlife</option>
      <option value="Archaeology">Archaeology</option>
    </select>
    <label htmlFor="description">Description</label>
    <textarea id="description" cols="30" rows="10" onChange={handleChange} value={formState.description}></textarea>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" onChange={handleChange} value={formState.image}></textarea>
    <select id="destination" onChange={handleChange} value={formState.destination}>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>
    <button type="submit">Send</button>
            </form>

        </div>
    )
}

export default AddActivity