// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            alt="search icon"
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="places-container">
          {searchResults.map(each => (
            <DestinationItem destinationDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
