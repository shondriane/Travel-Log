import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
     <nav>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/addActivity">Add Activity</Link>
        <Link to ="/addDestination">Add Destination</Link>
        
        </nav>
    </header>
  )
}

export default Header