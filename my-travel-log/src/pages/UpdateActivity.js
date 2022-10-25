import React from 'react'
import { useEffect, useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'

import axios from 'axios'
import '../styles/form.css'

const UpdateActivity =(prop)=>{
    const navigate = useNavigate()
    let { activityId } = useParams()
    const [data,setData]=useState([])
    
    const getActivityDetails = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/activityDetails/${activityId}`
        )
        console.log(response)
        setData(response.data.activityDetails)
       
      }
      useEffect(() => {
        getActivityDetails()
      }, [activityId])

      const initialState={
        name: `${data.name}`,
        activity: `${data.activity}`,
        description:`${data.description}`,
        image:`${data.image}`,
        destination:`${data.destination}`,
        image:`${data.image}`,
        description:`${data.description}`
    
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
    axios.put(`http://localhost:3001/api/activityDetails/${activityId}`,formState)
    setFormState(initialState)
 
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
    return (
<div>
<h1>Update Activity</h1>
<form orm className="classes.form" onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input type = "text" defaultValue ={data.name}/>
<label htmlFor="activity">Type of Activity:</label>
    <select id="activity" onChange={handleChange} value={formState.activity}>
        <option defaultValue ={data.name}>{data.activity}</option>
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
    <textarea id="description" cols="30" rows="10" defaultValue ={data.description} onChange={handleChange} value={formState.description}></textarea>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" defaultValue={data.image} onChange={handleChange} value={formState.image}></textarea>
    <label htmlFor="destination">Country</label>
    <select id="destination" onChange={handleChange} value={formState.destination}>
    <option defaultValue="select country">Select Country</option>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>
<Link onClick={() => navigate(-2)}>
    <button type="submit">Send</button>
    </Link>
</form>
</div>
    )
}

export default UpdateActivity