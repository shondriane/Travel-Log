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

  const handleChange = (event) => {
    let word= event.target.value
    let firstUpper = word.substr(0,1).toUpperCase()+ word.substr(1)
    setSearchQuery(firstUpper)
  }
  

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `http://localhost:3001/api/activitydetails/activity/${searchQuery}`
    )
      setSearchResults(response.data.activityDetails)
      toggleSearched(true)
      
    }
   

  return (
    <div>
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