import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the "secret" table of contents</h1>
    <p>Welcome!</p>
    <ul>
      Portfolio Pages
      <li><Link to="/">Go back to the homepage</Link></li>
      <li><Link to="/error">Go to Error page</Link></li>
      <li><Link to="/projects/test-md">Markdown Page 1</Link></li>
    </ul>
    <ul>
      React Project Pages
      <li>
        <a href="https://mdboticano.github.io/frank-ocean-lyrics">
          Frank Lyrics
        </a>
      </li>
      <li>
        <a href="https://mdboticano.github.io/markdown-previewer">
          Markdown Previewer
        </a>
      </li>
      <li>
        <a href="https://mdboticano.github.io/pomodoro">
          Pomodoro
        </a>
      </li>
      <li>
        <a href="https://mdboticano.github.io/react-calculator">
          Calculator
        </a>
      </li>
    </ul>
  </Layout>
)

export default SecondPage
