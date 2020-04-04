import React from 'react'
import { useFetch } from 'use-http'
import { ReactSVG } from 'react-svg'
import logo from './logo.svg'
import './styles/App.scss'

import Header from './component/Header'
function App() {
  const { loading, error, data } = useFetch('data.json', {}, [])
  if (loading) {
    return <span>...</span>
  }

  if (error) {
    console.log('here')
    return <div>{error}</div>
  }
  console.log(data.user_preferences.background_color)

  return (
    <div className="App">
      <div className="container">
        <div className="page">
          <Header
            profilePicUrl={data.profile_pic_url}
            username={data.username}
          />

          <footer>
            <ReactSVG src={logo} className="App-logo" />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
