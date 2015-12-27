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
    let {
      center,
      radius,
      start,
      end,
      color,
      strokeWidth,
      strokeColor,
      mouseEnter,
      mouseLeave
    } = this.props

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
        stroke: strokeColor,
        opacity: this.state.opacity
      },
      stroke: {
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeOpacity: this.state.opacity
      }
    }
    let props = {
      transform: transformation,
      style: styles.graph
    }
    if(mouseEnter) {
      props.onMouseEnter = mouseEnter.bind(this)
    }
    if(mouseLeave) {
      props.onMouseLeave = mouseLeave.bind(this)
    }

    return (
      <g {...props}>
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
  strokeWidth: React.PropTypes.number,
  strokeColor: React.PropTypes.string,
  opacity: React.PropTypes.number,
  mouseEnter: React.PropTypes.func,
  mouseLeave: React.PropTypes.func
}

SimpleSlice.defaultPropts = {
  color: 'white',
  strokeWidth: 1.0,
  strokeColor: 'black'
}

export default SimpleSlice
