
const About = () => {

    return (
      <div className="travelBody" >
        <img src ="https://travellersworldwide.com/wp-content/uploads/elementor/thumbs/shutterstock_623111885-1-scaled-phifxb7av8bl2lrxdes1syk43v9acwtvrveysd1ouo.jpg.webp" alt="world"></img>
    <div className="travelDiv" >
  <h1>My Travel Planner</h1>
  <p> 
    The purpose of this site is to have the space to plan, manage, and share your trip information with others.
    </p>

<a href ="/addDestination" alt="go">
        <button id="go" className= "send">Plan Trip</button>
    </a>
 
   <h2>Go out and see the world!</h2>
<p>
   <strong>Don't wait because tomorrow is never promised, and circmstances may change. </strong> 
    Explore your own neighborhood, your own state, your own country, and different regions in the world.
    You'll be suprised at what and who you'll find along the way.

  </p>


  </div>

      </div>
    )
  }
  
  export default About