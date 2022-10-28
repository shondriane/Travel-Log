import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
     <nav>
     <Link to ="/">About</Link>
        <Link to ="/home">Home</Link>
        <Link to ="/addDestination">Add Destination</Link>
        <Link to ="/addActivity">Add Activity</Link>
     
        
        </nav>
    </header>
  )
}

export default Header