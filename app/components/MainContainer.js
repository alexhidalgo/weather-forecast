import React from 'react'
import Search from './Search'

class MainContainer extends React.Component {
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
