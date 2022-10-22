import { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import ActivityCard from '../components/ActivityCard'
import ActivityDetails from './ActivityDetails'




const Destination = (props) => {
  const navigate= useNavigate()
  let{destinationId} = useParams()
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [destination, setDestination] = useState(null)

  const getDestination = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/activityDetails/${destinationId}`
    )
   console.log(response)
    setDestination(response.data.destination)
  setSelectedDestination(response.data.destination.name)
  }
  useEffect(() => {
   getDestination()

  }, [destinationId])

  return selectedDestination!==null ?(
    <div className="destination-content">
      <h1>{selectedDestination}</h1>
      <Link onClick ={()=> navigate(-1)}>Go back to destination list</Link>
      {ActivityDetails.map((activity) => (
        <Link to ={`/activityDetails/${destination}`}>
        <ActivityCard
          key={activity.id}
          name={activity.name}
          image={activity.image}
          
          
        />
        </Link>
      ))}
    </div>
  ):null
}

export default Destination