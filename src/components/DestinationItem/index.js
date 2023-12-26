// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="place-container">
      <img alt={name} src={imgUrl} className="place-img" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
