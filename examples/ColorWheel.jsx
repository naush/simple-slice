import React from 'react'
import modular from 'simple-modular-scale'
import SimpleSlice from '../components/SimpleSlice.jsx'

class ColorWheel extends React.Component {

  render () {
    let ms = modular()

    let styles = {
      container: {
        display: 'table',
        width: '100%',
        boxSizing: 'border-box',
        padding: ms[4],
        minHeight: '100vh',
        backgroundColor: 'black',
      },
      center: {
        display: 'table-cell',
        verticalAlign: 'middle',
      },
      pie: {
        maxWidth: ms[10],
        maxHeight: '100%',
        margin: 'auto'
      },
      view: {
        maxHeight: '100%'
      }
    }

    let props = {
      center: 64,
      radius: 32,
      opacity: 1.0,
      mouseEnter: function () { this.setState({ opacity: 0.6 }) },
      mouseLeave: function () { this.setState({ opacity: 1.0 }) }
    }

    return (
      <div style={styles.container}>
        <div style={styles.center}>
          <div style={styles.pie}>
            <div>
              <svg viewBox='0 0 128 128' style={styles.view}>
                <SimpleSlice {...props} start={0} end={45} color='red' />
                <SimpleSlice {...props} start={45} end={90} color='orange' />
                <SimpleSlice {...props} start={90} end={135} color='yellow' />
                <SimpleSlice {...props} start={135} end={180} color='green' />
                <SimpleSlice {...props} start={180} end={225} color='blue' />
                <SimpleSlice {...props} start={225} end={270} color='indigo' />
                <SimpleSlice {...props} start={270} end={315} color='purple' />
                <SimpleSlice {...props} start={315} end={360} color='white' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorWheel
