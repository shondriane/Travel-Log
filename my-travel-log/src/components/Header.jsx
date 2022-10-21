import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
     <nav>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/form">Add Destination Activity</Link>
        </nav>
    </header>
  )
}

export default Header