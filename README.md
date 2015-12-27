# Slice
A basic component of a slice of pie created in ReactJS and SVG.

# Usage
```javascript
<Slice
  center={64}
  radius={32}
  start={0}
  end={30}
  color={blue}
/>
```

# Properties

```javascript
center: React.PropTypes.number
```

The center of the pie.

```javascript
radius: React.PropTypes.number
```

The length of the slice from the center of the pie.

```javascript
start: React.PropTypes.number
```

The starting angle of a slice in degrees.

```javascript
end: React.PropTypes.number
```

The ending angle of a slice in degrees.

```javascript
color: React.Proptypes.string
```

The color of the slice.

```javascript
mouseEnter: React.PropTypes.func
```

A callback function to execute when the ```mouseenter``` is fired on slice.

```javascript
mouseLeave: React.PropTypes.func
```

A callback function to execute when the ```mouseleave``` is fired on slice.
