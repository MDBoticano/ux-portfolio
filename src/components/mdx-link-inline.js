import React from 'react'
import MdxLink from './mdx-link'

const MdxInlineLink = ({ pTextBefore, pTextAfter, aText, link, inNewTab }) => {
  return (
    <p>
      {pTextBefore}
      <MdxLink text={aText} link={link} inNewTab={inNewTab} />
      {pTextAfter}
    </p>
  )
}

export default MdxInlineLink