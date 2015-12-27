# Slice
A simple component of a slice created in ReactJS and SVG.

# Example

Run the following from command line.

```
npm install
npm start
```

Go to [http://localhost:8080](http://localhost:8080) on your browser to view the color wheel example.

# Usage
```javascript
<Slice
  center={64}
  radius={32}
  start={0}
  end={30}
  opacity={1.0}
  color='blue'
/>
```

# Properties

```javascript
center: React.PropTypes.number // The distance from upper left corner of your screen in x- or y- direction.
```

```javascript
radius: React.PropTypes.number // The distance from the center to the edge of your slice.
```

```javascript
start: React.PropTypes.number // The starting angle of a slice in degrees.
```

```javascript
end: React.PropTypes.number // The ending angle of a slice in degrees.
```

```javascript
opacity: React.Proptypes.number // The opacity of the slice.
```

```javascript
color: React.Proptypes.string // The color of the slice.
```

```javascript
mouseEnter: React.PropTypes.func // A callback function to execute when the mouseenter is fired on slice.
```

```javascript
mouseLeave: React.PropTypes.func // A callback function to execute when the mouseleave is fired on slice.
```
