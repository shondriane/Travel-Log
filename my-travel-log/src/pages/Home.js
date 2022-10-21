import { useEffect, useState } from 'react'
import axios from 'axios'
import ActivityCard from '../components/ActivityCard'
import DestinationCard from '../components/DestinationCard'
import {useNavigate,Link} from 'react-router-dom'




const Home = () => {
  const [activityDetails, setActivityDetails] = useState([])
 

  const getActivityDetails = async () => {
    const response = await axios.get(
        'http://localhost:3001/api/activityDetails'
    )
   
    setActivityDetails(response.data.activityDetails)
  }
  useEffect(() => {
    getActivityDetails()
  }, [])

  const [destination, setDestination] = useState([])
 

  const getDestination = async () => {
    const response = await axios.get(
        'http://localhost:3001/api/destination'
    )
   
    setDestination(response.data.destination)
  }
  useEffect(() => {
    getDestination()
  }, [])

 
    let navigate = useNavigate()
  

  return (
    <div>
   
      <div className="activities">
        <h2>ActivityDetails</h2>
        <section className="container-grid">
        {activityDetails.map((activity)=>(
          <Link to ={`/activityDetails/${activity._id}`}>
          <ActivityCard
          image= {activity.image}
          name ={activity.name}
          key ={activity._id}/>
          </Link>
))}
</section></div>

<div className="destination">
<h2>Destination</h2>
    <section className="container-grid">
 {destination.map((country)=>(
          <Link to ={`/activityDetails/${activityDetails.destination}`}>
          <DestinationCard
          image= {country.image}
          name ={country.name}
          key ={country.id}/>
          </Link>
))}  
     </section>
     </div>
     </div>
  )
}

export default Home