import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import ActivityCard from '../components/ActivityCard'
import DestinationCard from '../components/DestinationCard'
import {Link} from 'react-router-dom'




const Home = () => {
  const [activityDetails, setActivityDetails] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  // const [upcomingDate, setUpcomingDate]= useState([])
 

 const BASE_URL = '/api'

  const getActivityDetails = async () => {
    const response = await axios.get(
        `${BASE_URL}/activityDetails`
    )
   
    setActivityDetails(response.data.activityDetails)
  }
  useEffect(() => {
    getActivityDetails()
  }, [])

  const [destination, setDestination] = useState([])
 

  const getDestination = async () => {
    const response = await axios.get(
        `${BASE_URL}/destination`
    )
   
    setDestination(response.data.destination)
  }
  useEffect(() => {
    getDestination()
  }, [])

const upcomingTrip =()=>{
const today = new Date();
const upcoming = new Date();
upcoming.setDate(today.getDate()+21);
const year = upcoming.getUTCFullYear();
const month = upcoming.getUTCMonth() + 1;
const day = upcoming.getUTCDate();
const withHyphens = [year, month, day].join('-');
const year1 = today.getUTCFullYear();
const month1 = today.getUTCMonth()+1;
const day1 = today.getUTCDate();
const todayDate =[year1,month1,day1].join ('-');

 activityDetails.map((activity)=>{
  if (`${activity.date}`<=withHyphens && `${activity.date}` >=todayDate ){

  document.getElementById('upcoming').innerHTML=`You have an upcoming ${activity.activity} for ${activity.name} on ${activity.date}`
 

}
})
//  activityDetails.forEach((activity)=>{
//   const result=[]
//   if (`${activity.date}`<=withHyphens && `${activity.date}` >=todayDate ){
//     result.push(activity)
//   }
//   setUpcomingDate(result)
//  })

  
// }

upcomingTrip()



  const handleChange = (event) => {
    let word= event.target.value
    let firstUpper = word.substr(0,1).toUpperCase()+ word.substr(1)
    setSearchQuery(firstUpper)
  }
  

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `${BASE_URL}/activitydetails/activity/${searchQuery}`
    )


      setSearchResults(response.data.activityDetails)
      toggleSearched(true)
      
    }
   

  return (
    
    <div> 
   <div className="upcoming">
  <h1>Upcoming Trips</h1>
  <p id ="upcoming">
   
  </p>
</div>
      <div className="search">
        <Search handleChange={handleChange}onSubmit={getSearchResults} value={searchQuery}/>
        {searched && (<div><h2>Search Results</h2>
        <section className="search-results container-grid">
        {searchResults.map((searchResult)=>(
          <Link to ={`/activityDetails/${searchResult._id}`} key ={searchResult._id}>
          <ActivityCard
          image= {searchResult.image}
          name ={searchResult.name}
         />
          </Link>      
))}
</section></div>
   )}
   </div>   

<div className="allActivities">
  <Link to="/allActivities">
  <h2>View All Activities</h2>

  </Link>
</div>

<div className="destination">
<h1>Destination</h1>
    <section className="container-grid">
 {destination.map((country)=>(
          <Link to ={`/destination/${country._id}`} key ={country._id}>
          <DestinationCard
          image= {country.image}
          name ={country.country}
          />     
          </Link>       
))}  
     </section>
     </div>
     </div>
  )
}

export default Home