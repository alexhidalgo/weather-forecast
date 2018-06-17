import React from 'react'
import { fetchCity } from '../utils/api'


class Search extends React.Component {
  state = {
    city: '',
    weather: null
  }
  handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    this.setState(() => ({ city: value }))
  }
  handleSubmit = async () => {
    const cityData = await fetchCity(this.state.city)
    console.log(cityData)

  }
  render () {
    const { city } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={city}
            onChange={this.handleChange} />
          <button
            disabled={!this.state.city}>
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}

export default Search
