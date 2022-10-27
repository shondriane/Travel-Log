import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/form.css'
import Input from '../components/Input'
import Tasks from '../components/Tasks'

const AddActivity =()=>{

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
    axios.post('http://localhost:3001/api/activityDetails',formState)
    setFormState(initialState)
   setTasks([])
    console.log(formState)
    
    }

    const handleChange=event=>{
        setFormState({...formState,[event.target.id]:event.target.value})
      
        // checkPack(formState.activity)
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


   
   
    return(
        <div className="formContainer">
        <div className="formDiv">
            <div className="classes.form" >
            <div className="form">
<h1>Creating New Activity</h1>

<label htmlFor="name">Name:</label>
    <textarea className="name"type="text" id="name" onChange={handleChange}value={formState.name}/>
    <label>Date:</label>
    <input type="date"  id="date" onChange={handleChange} value={formState.date}/>
<label htmlFor="activity">Type of Activity:</label>
    <select id="activity" onChange={handleChange} value={formState.activity}>
    <option defaultValue ="select option">Select Activity</option>
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
    <option value="Nature">Nature and Wildlife</option>
    <option value="Pack">Pack</option>
      <option value="Show">Show</option>
      <option value="Tour">Tour</option>
      <option value="Transportation">Transportation</option>
      <option value="Nightlife">Nightlife</option>
    </select>
   
    <label htmlFor="description">Description</label>
    <textarea id="description" cols="30" rows="10" onChange={handleChange} value={formState.description}></textarea>
    <Input handleChange={handleChangeInput} addTask={addTask} inputValue={inputValue} onChange={handleChange} />
      <Tasks tasks={tasks}  value={formState.todo} removeTask={removeTask}/>
    <ul key="list">
    
    </ul>
  
    <label htmlFor="image">Image Address Link</label>
    <textarea id="image" onChange={handleChange} value={formState.image}></textarea>
    <select id="destination" onChange={handleChange} value={formState.destination}>
    <label htmlFor="destination">Add Country</label> 
    <option defaultValue ="select country">Select Country</option>
    {destinations.map((country)=>(
          <option value= {country._id}>{country.country}</option>
         
))} 
</select>
    <button onClick={handleSubmit} type="submit" className="send">Send</button>
    </div>
            </div>
          
            </div>
            </div>
    )
   
}

export default AddActivity