import React from 'react'
import { useEffect, useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'

import axios from 'axios'
import '../styles/form.css'

const UpdateDestination =(prop)=>{
    const navigate = useNavigate()
    let { destinationId } = useParams()
    const [data,setData]=useState([])
    
    const getCountry = async () => {
        const response = await axios.get(
          `http://localhost:3001/api/destination/${destinationId}`
        )
        console.log(response)
        setData(response.data.destination)
       
      }
      useEffect(() => {
        getCountry()
      }, [destinationId])

      const initialState={
        country: `${data.country}`,
        image:`${data.image}`,
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
    axios.put(`http://localhost:3001/api/destination/${destinationId}`,formState)
    setFormState(initialState)
 
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
    }
    return (
<div>
<h1>Update Destination</h1>
<form className="classes.form" onSubmit={handleSubmit}>
<label htmlFor="destination">Country</label>
<select id="destination" onChange={handleChange} value={formState.destination}>
  
<option defaultValue={data._id}>{data.country}</option>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" defaultValue={data.image} onChange={handleChange} value={formState.image}></textarea>
<Link onClick={() => navigate(-2)}>
    <button type="submit">Send</button>
    </Link>
</form>
</div>
    )
}

export default UpdateActivity