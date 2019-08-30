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
import LogoImage from './src/components/logo'

const wrapPageElement = ({ element, props }) => {
  return <LogoImage {...props}>{element}</LogoImage>
}

export default wrapPageElement
// End