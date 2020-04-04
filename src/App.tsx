import React from 'react'
import { useFetch } from 'use-http'
import { ReactSVG } from 'react-svg'
import logo from './logo.svg'
import './styles/App.scss'

import Header from './component/Header'
import List from './component/List'

function App() {
  const { loading, error, data } = useFetch('data.json', {}, [])
  if (loading) {
    return <span>...</span>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <div className="container">
        <div className="page">
          <Header profilePicUrl={data.profilePicUrl} username={data.username} />
          <List data={data.linkList} />
          <footer>
            <ReactSVG src={logo} className="App-logo" />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
