import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Template from '../components/Template'
import 'bootstrap/scss/bootstrap.scss'
import './style.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Template>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Template>
    )
  }
}

export default withReduxStore(MyApp)
