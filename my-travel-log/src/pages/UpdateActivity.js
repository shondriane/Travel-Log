import React from 'react'
import { useEffect, useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import Input from '../components/Input'
import Tasks from '../components/Tasks'

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
        date:"",
        activity: "",
        destination:"",
        image:"",
       description: "",
        todo:[]
    
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
    const [tasks, setTasks] = useState([])
    const [inputValue,setValue]= useState(" ")
    const addTask =()=>{
      let list = [...tasks,inputValue]
      setTasks(list)
      setFormState({...formState,todo:list})
      setValue(" ")
     
    }
  
    const handleChangeInput =(e)=>{
      setValue(e.target.value)
       
        }
        const removeTask =(index)=>{
          let list=[...tasks]
          list.splice(index,1)
          setTasks(list)
        }

    
    return (
      <div className="formContainer">
<div className="formDiv">
<div className="classes.form" >
  <div className="form">
<h1>Update Activity</h1>

<label htmlFor="name">Name:</label>
<textarea type = "text" value={formState.name} onChange={handleChange} id="name"/>
<label>Date:</label>
    <input type="date"  id="date" onChange={handleChange} value={formState.date}/>
<label htmlFor="activity">Type of Activity:</label>
    <select id="activity" onChange={handleChange} value={formState.activity}>
        <option value={formState.activity}>{formState.activity}</option>
     
      <option value="Adventure">Adventure</option>
      <option value="Airplane">Airplane Ticket</option>
      <option value="Archaeology">Archaeology</option>
      <option value="Beach">Beach</option>
      <option value="Boat">Cruise and Sailing</option>
      <option value="Food">Food</option>
    <option value="Festival">Festival</option>
    <option value="Game">Game</option>
    <option value="Hotel">Hotel</option>
    <option value="Museum">Museum</option>
    <option value="Nature&Wildlife">Nature and Wildlife</option>
    <option value="Pack">Pack</option>
      <option value="Show">Show</option>
      <option value="Tour">Tour</option>
      <option value="Transportation">Transportation</option>
      <option value="Nightlife">Nightlife</option>
     
   
    </select>
    <label htmlFor="description">Description</label>
    <textarea id="description" cols="30" rows="10" value ={formState.description} onChange={handleChange} ></textarea>
    <Input handleChange={handleChangeInput} addTask={addTask} inputValue={inputValue} onChange={handleChange} value={formState.todo}/>
    <Tasks tasks={tasks} removeTask={removeTask}value={formState.todo}/>
    <ul>
     
    </ul>
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" value={formState.image} onChange={handleChange} ></textarea>
    <label htmlFor="destination">Country</label>
    <select id="destination" onChange={handleChange} value={formState.destination}>
    <option defaultValue="select country">Select Country</option>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>

    <button className="send"  type="submit" onClick={handleSubmit}>Send</button>
 </div> 
</div>
</div>
</div>
    )
}

export default UpdateActivity