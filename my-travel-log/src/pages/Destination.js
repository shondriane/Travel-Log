import { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import ActivityCard from '../components/ActivityCard'
import ActivityDetails from './ActivityDetails'




const Destination = (props) => {
  const navigate= useNavigate()
  let{destinationId} = useParams()
  const [destinationsId, setDestinationId] = useState(null)
  const [destination, setDestination] = useState(null)

  const getDestinationById
   = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/activityDetails/destination/${destinationId}`
    )
   console.log(response)
    setDestination(response.data.activityDetails)
  setDestinationId(destinationId)
  }
  useEffect(() => {
   getDestinationById()

  }, [destinationId])

  const removeActivity=async()=>{
  
    const remove = await axios.delete(`http://localhost:3001/api/destination/${destinationId}`)
    navigate(-1)
  
}
  return destinationsId!==null ?(
    <div className="container-grid">
    
      <Link onClick ={()=> navigate(-1)}>Go back to destination list</Link>
      <Link onClick = {removeActivity}>Remove Destination</Link>
      {destination.map((activity) => (
        <Link to ={`/activityDetails/${activity._id}`}>
        <ActivityCard
          key={activity._id}
          name={activity.name}
          image={activity.image}
       
        />
          {/* <button onClick={removeActivity}> Remove</button> */}
        </Link>
        
      ))}
    
    </div>
  ):null
}

export default Destination