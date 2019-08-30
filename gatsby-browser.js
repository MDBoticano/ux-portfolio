/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// For importing locally hosted font
import './src/styles/global.css'
// End

// For prevent components from unmounting 
import React from 'react'
import Layout from './src/components/layout'

console.log('browser schtuff')

export const wrapPageElement = ({ element, props }) => {
  console.log('wraping Layout')

  return <Layout {...props}>{element}</Layout>
}
// End