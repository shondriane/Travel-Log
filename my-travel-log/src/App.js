import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import AddActivity from './pages/AddActivity'
import AddDestination from './pages/AddDestination'
import About from './pages/About'
import Home from './pages/Home'
import AllActivities from './pages/AllActivities'
import ActivityDetails from './pages/ActivityDetails'
import Destination from './pages/Destination'
import UpdateActivity from './pages/UpdateActivity'
import UpdateDestination from './pages/UpdateDestination'


const App = () => {

  return (
    <div>
<Header />
<main>
 
      <Routes>
        
        <Route path="/" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/allActivities" element={<AllActivities/>}/>
       <Route path ="/updateActivity/:activityId" element={<UpdateActivity/>}/>
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
