# trailingEffect
## To draw a rectangle
```
ctx.beginPath()
ctx.rect(e.x,e.y,20, 20)
ctx.fill();
```

## To draw a circle
```
const degreeToRadians = (deg) => {
    return deg /180 * Math.PI
}
ctx.beginPath();
ctx.arc(100, 100, 50, 0, degreeToRadians(180));
ctx.fill();
```