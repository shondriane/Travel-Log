import { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from 'react-router-dom'
import axios from 'axios'



const ActivityDetails = (props) => {
  const navigate= useNavigate()
  let{activityId} = useParams()
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [activityDetails, setActivityDetails] = useState(null)

  const getActivityDetails = async () => {
    const response = await axios.get(
        'http://localhost:3001/api/activityDetails'
    )
   console.log(response)
    setActivityDetails(response.data.activityDetails)
  setSelectedActivity(response.data.activityDetails.name)
  }
  useEffect(() => {
   getActivityDetails()

  }, [activityId])

  return selectedActivity!==null ?(
    <div className="activity-content">
      <h1>{selectedActivity}</h1>
      <Link onClick ={()=> navigate(-1)}>Go back to activity list</Link>
      <section className="image-container">
        <div>
        <img src ={activityDetails.image}/>

        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h1>Place: {activityDetails.name}</h1>
          <h2>Activity: {activityDetails.activity}</h2>
        <p>{activityDetails.description}</p>
        </div>
        <div>
         
        </div>
      </section>
    </div>
  ):null
}

export default ActivityDetails