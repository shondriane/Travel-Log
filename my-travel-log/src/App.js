import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import AddActivity from './pages/AddActivity'
import AddDestination from './pages/AddDestination'
import ActivityCard from './components/ActivityCard'
import About from './pages/About'
import Home from './pages/Home'
import AllActivities from './pages/AllActivities'
import ActivityDetails from './pages/ActivityDetails'
import Destination from './pages/Destination'
import UpdateActivity from './pages/UpdateActivity'
import UpdateDestination from './pages/UpdateDestination'
import CopyActivity from './pages/CopyActivity'

const App = () => {

  return (
    <div>
<Header />
<main>
 
      <Routes>
        
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/allActivities" element={<AllActivities/>}/>
       <Route path ="/updateActivity/:activityId" element={<UpdateActivity/>}/>
       <Route path ="/copyActivity/:activityId" element={<CopyActivity/>}/>
       <Route path ="/updateDestination/:destinationId" element={<UpdateDestination/>}/>  
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
