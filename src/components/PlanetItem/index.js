import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props

  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="sliderCard-container">
      <img src={imageUrl} alt={name} />
      <h1 className="planet-header">{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
