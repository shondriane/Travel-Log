import { useEffect, useState } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import ActivityCard from '../components/ActivityCard'





const AllActivities = (props) => {
  const navigate= useNavigate()
  const BASE_URL = '/api'
  const [activities, setActivities] = useState(null)

  const getActivities
   = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/activityDetails`
    )
   console.log(response)
    setActivities(response.data.activityDetails)

  }
  useEffect(() => {
   getActivities()

  }, [activities])


  return activities!==null ?(
    <div className="container-grid">
    
      {activities.map((activity) => (
        <Link to ={`/activityDetails/${activity._id}`}>
        <ActivityCard
          key={activity._id}
          name={activity.name}
          image={activity.image}
       
        />
        </Link>
        
      ))}
    
    </div>
  ):null
}

export default AllActivities