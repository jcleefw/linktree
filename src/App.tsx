import React from 'react'
import { useFetch } from 'use-http'
import { ReactSVG } from 'react-svg'
import logo from './logo.svg'
import './styles/App.scss'

import Header from './component/Header'
import List from './component/List'
import cx from 'classnames'
import { generateUserTheme, useTheme } from './common/theme'

const App = () => {
  const { loading, error, data } = useFetch('data.json', {}, [])
  const theme = generateUserTheme(data)
  useTheme(theme)

  if (loading) {
    return <span>...</span>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <div className="container">
        <div className={cx('page', data.userPreferences.theme)}>
          <Header profilePicUrl={data.profilePicUrl} username={data.username} />
          <List data={data.linkList} />
          <footer className={cx('footer', data.userPreferences.theme)}>
            <ReactSVG src={logo} className="App-logo" />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
