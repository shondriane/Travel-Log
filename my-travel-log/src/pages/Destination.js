import { useEffect, useState } from 'react'
import {useParams, useNavigate,Link} from 'react-router-dom'
import axios from 'axios'



const Destination = (props) => {
  const navigate= useNavigate()
  let{destinationId} = useParams()
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [destination, setDestination] = useState(null)

  const getDestination = async () => {
    const response = await axios.get(
        'http://localhost:3001/api/destination'
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
      <section className="image-container">
        <div>
        <img src ={destination.image}/>

        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h1>Name: {destination.name}</h1>
        
        </div>
        <div>
         
        </div>
      </section>
    </div>
  ):null
}

export default Destination