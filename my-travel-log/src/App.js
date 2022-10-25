import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import AddActivity from './pages/AddActivity'
import AddDestination from './pages/AddDestination'
import ActivityCard from './components/ActivityCard'
import About from './pages/About'
import Home from './pages/Home'
import ActivityDetails from './pages/ActivityDetails'
import Destination from './pages/Destination'
import UpdateActivity from './pages/UpdateActivity'

const App = () => {

  return (
    <div>
<Header />
<main>
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
       <Route path ="/updateActivity/:activityId" element={<UpdateActivity/>}/>
      {/* <Route path ="/updateDestination" element={<UpdateDestination/>}/>  */}
        <Route path ="/addActivity" element={<AddActivity/>}/>
        <Route path = "/addDestination" element={<AddDestination/>}/>
         <Route path="/activitydetails/:activityId" element={<ActivityDetails />} />
        <Route path="/destination/:destinationId" element={<Destination />} /> 
      </Routes>
    </main>
    </div>
  )
}

export default App
