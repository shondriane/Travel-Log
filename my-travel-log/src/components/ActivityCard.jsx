const ActivityCard = ({ image, name, onClick }) => {
  
  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
      
      </div>
    </div>
  )
}

export default ActivityCard
