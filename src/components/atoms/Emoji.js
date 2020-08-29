import React from 'react'
import Twemoji from 'react-twemoji'

const Emoji = ({ symbol, label }) => (
  <Twemoji options={{ className: 'twemoji' }} noWrapper={true}>
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  </Twemoji>
)
export default Emoji
