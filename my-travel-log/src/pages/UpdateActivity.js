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
        setFormState(response.data.activityDetails)
       
      }
      useEffect(() => {
        getActivityDetails()
      }, [activityId])

      const initialState={
        name: "",
        activity: "",
        description: "",
        image:"",
        destination: "",
        image:"",
        description: ""
    
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
    navigate('/')
 
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
    return (
<div className="formDiv">
<form className="classes.form" onSubmit={handleSubmit}>
  <div className="form">
<h1>Update Activity</h1>

<label htmlFor="name">Name:</label>
<textarea type = "text" value={formState.name} onChange={handleChange} id="name"/>
<label htmlFor="activity">Type of Activity:</label>
    <select id="activity" onChange={handleChange} value={formState.activity}>
        <option value={formState.activity}>{formState.activity}</option>
      <option value="Nature&Wildlife">Nature and Wildlife</option>
      <option value="Museum">Museum</option>
      <option value="Food">Food</option>
      <option value="Adventure">Adventure</option>
      <option value="Cruise&Sailing">Cruise and Sailing</option>
      <option value="Beach">Beach</option>
      <option value="Tour">Tour</option>
      <option value="Festival">Festival</option>
      <option value="Show">Show</option>
      <option value="Game">Game</option>
      <option value="Nightlife">Nightlife</option>
      <option value="Archaeology">Archaeology</option>
      <option value="Airplane">Airplane Ticket</option>
      <option value="Hotel">Hotel</option>
      <option value="Transportation">Transportation</option>
      <option value="Pack">Pack</option>
      <option value="Toilitres">Tolitres</option>
      <option value="Documents">Documents</option>
    </select>
    <label htmlFor="description">Description</label>
    <textarea id="description" cols="30" rows="10" value ={formState.description} onChange={handleChange} ></textarea>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" value={formState.image} onChange={handleChange} ></textarea>
    <label htmlFor="destination">Country</label>
    <select id="destination" onChange={handleChange} value={formState.destination}>
    <option defaultValue="select country">Select Country</option>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>

    <button type="submit">Send</button>
 </div> 
</form>
</div>
    )
}

export default UpdateActivity