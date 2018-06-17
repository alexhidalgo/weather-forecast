import React from 'react'
import Search from './Search'

export default function MainContainer () {
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
