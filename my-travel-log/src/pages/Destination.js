import { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import ActivityCard from '../components/ActivityCard'
import ActivityDetails from './ActivityDetails'
import { BASE_URL } from '../globals'



const Destination = (props) => {
 
  const navigate= useNavigate()
  let{destinationId} = useParams()
  const [destinationsId, setDestinationId] = useState(null)
  const [destination, setDestination] = useState(null)

  const getDestinationById
   = async () => {
    const response = await axios.get(
      `${BASE_URL}/activityDetails/destination/${destinationId}`
    )
   console.log(response)
    setDestination(response.data.activityDetails)
  setDestinationId(destinationId)
  }
  useEffect(() => {
   getDestinationById()

  }, [destinationId])

  const removeActivity=async()=>{
   
    if(window.confirm('Are you sure you wish to delete this item?')){
    const remove = await axios.delete(`${BASE_URL}/destination/${destinationId}`)
    navigate(-1)
    }
  
}


  return destinationsId!==null ?(
    <div className="container-grid">
    <div className="sidenav">
   
      <Link onClick ={()=> navigate(-1)}>Go back to destination list</Link>
      <Link onClick = {removeActivity}>Remove Destination</Link>
      <Link to={`/updateDestination/${destinationId}`}>Update Destination</Link>
      </div>
      
      {destination.map((activity) => (
        <Link to ={`/activityDetails/${activity._id}`}>
        <ActivityCard
          key={activity._id}
          name={activity.name}
          image={activity.image}
       
        />
          <button onClick={removeActivity}> Remove</button>
        </Link>
        
      ))}
    
    </div>
  ):null
}

export default Destination