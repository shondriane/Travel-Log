import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Form'
import ActivityCard from './components/ActivityCard'
import About from './pages/About'
import Home from './pages/Home'
import ActivityDetails from './pages/ActivityDetails'
import Destination from './pages/Destination'


const App = () => {

  return (
    <div>
<Header />
<main>
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path ="/form" element={<Form/>}/>
         <Route path="/activitydetails/:activityId" element={<ActivityDetails />} />
        <Route path="/destination/:destinationId" element={<Destination />} /> 
      </Routes>
    </main>
    </div>
  )
}

export default App