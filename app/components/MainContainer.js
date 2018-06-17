import React from 'react'
import Search from './Search'
import { fetchCity } from '../utils/api'

class MainContainer extends React.Component {
  async componentDidMount () {
    const city = 'london'
    const cityData = await fetchCity(city)
  }
  render () {
    return (
      <div className='main-container'>
        <div>
          <h1>
            Enter a City and State
          </h1>
        </div>
        <Search />
      </div>
    )
  }
}

export default MainContainer
