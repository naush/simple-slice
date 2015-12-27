import React from 'react'

class SimpleSlice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opacity: props.opacity }
  }

  toRadian (degrees) {
    return Math.PI * degrees / 180
  }

  render () {
    let { center, radius, start, end, color, mouseEnter, mouseLeave } = this.props

    let radians = this.toRadian(end - start - 90)
    let destX = center + radius * Math.cos(radians)
    let destY = center + radius * Math.sin(radians)
    let transformation = `rotate(${start} ${center} ${center})`
    let description = [
      'M', center, center,
      'L', center, center - radius,
      'A', radius, radius, 0, 0, 1, destX, destY,
      'z'
    ].join(' ')
    let styles = {
      graph: {
        fill: color,
        stroke: color,
        opacity: this.state.opacity
      },
      stroke: {
        strokeWidth: 0.0,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeOpacity: this.state.opacity
      }
    }

    return (
      <g transform={ transformation }
        style={ styles.graph }
        onMouseEnter={ mouseEnter.bind(this) }
        onMouseLeave={ mouseLeave.bind(this) }>
        <path d={ description } style={ styles.stroke } />
      </g>
    )
  }
}

SimpleSlice.propTypes = {
  center: React.PropTypes.number,
  radius: React.PropTypes.number,
  start: React.PropTypes.number,
  end: React.PropTypes.number,
  color: React.PropTypes.string,
  opacity: React.PropTypes.number,
  mouseEnter: React.PropTypes.func,
  mouseLeave: React.PropTypes.func
}

export default SimpleSlice
