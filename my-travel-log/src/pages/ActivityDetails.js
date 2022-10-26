import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'



const ActivityDetails = (props) => {
  const navigate = useNavigate()
  let { activityId } = useParams()
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [activityDetails, setActivityDetails] = useState(null)
  
 


  const getActivityDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/activityDetails/${activityId}`
    )
    console.log(response)
    setActivityDetails(response.data.activityDetails)
    setSelectedActivity(response.data.activityDetails.name)
  }
  useEffect(() => {
    getActivityDetails()
  }, [activityId])

  

const removeActivity=async()=>{
  if(window.confirm('Are you sure you wish to delete this item?')){
    const remove = await axios.delete(`http://localhost:3001/api/activityDetails/${activityId}`)
    navigate(-2)
  }
  }
 




  return selectedActivity !== null ? (
    <div className="activity-content">
      <h1 className="title">{selectedActivity}</h1>
      <Link onClick={() => navigate(-1)}>Go back to activity list</Link>
    
      <section className="image-container">
       
          <img src={activityDetails.image} alt="activity" />
         
      </section>
      <section className="details">
       
      <h2>Activity: {activityDetails.activity}</h2>
        
          <p>{activityDetails.description}</p>
         
          <ul>
            <li>{activityDetails.todo}</li>
          </ul>

          <button className="remove"onClick={removeActivity} >Remove</button>
          <Link to={`/updateActivity/${activityId}`}>
          <button className="edit">Edit</button>
       </Link>
       <Link to={`/copyActivity/${activityId}`}>
          <button className="copy">Copy</button>
       </Link>
      
      </section>
    </div>
  ) : null
}

export default ActivityDetails
