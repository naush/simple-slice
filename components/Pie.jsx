import React from 'react'
import Slice from './Slice.jsx'

class Pie extends React.Component {
  render () {
    let { size, center, radius } = this.props
    let viewBox = `0 0 ${size} ${size}`
    let style = { maxHeight: '100%' }
    let props = {
      center: center,
      radius: radius,
      mouseEnter: function () { this.setState({ opacity: 1.0 }) },
      mouseLeave: function () { this.setState({ opacity: 0.6 }) }
    }

    return (
      <div>
        <svg viewBox={viewBox} style={style}>
          <Slice {...props} start={0} end={45} color='red' />
          <Slice {...props} start={45} end={90} color='orange' />
          <Slice {...props} start={90} end={135} color='yellow' />
          <Slice {...props} start={135} end={180} color='green' />
          <Slice {...props} start={180} end={225} color='blue' />
          <Slice {...props} start={225} end={270} color='indigo' />
          <Slice {...props} start={270} end={315} color='purple' />
          <Slice {...props} start={315} end={360} color='white' />
        </svg>
      </div>
    )
  }
}

Pie.propTypes = {
  size: React.PropTypes.number,
  center: React.PropTypes.number,
  radius: React.PropTypes.number
}

export default Pie
