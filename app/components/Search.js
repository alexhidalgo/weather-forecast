import React from 'react'

class Search extends React.Component {
  state = {
    city: null
  }
  render () {
    return (
      <div>
        <input />
        <button>
          Get Weather
        </button>
      </div>
    )
  }
}

export default Search
