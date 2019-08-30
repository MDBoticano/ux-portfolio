import React from 'react'

const MdxLink = ({ text, link, inNewTab }) => {
  if (inNewTab) {
    return (
      <a href={link} className="mdx-link" rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    )
  } else {
    return (
      <a href={link} className="mdx-link">{text}</a>
    )
  }
}

export default MdxLink