# Shared ES modules

Some helpful algorithms from different sources converted to new syntax for personal use

## MD5 hashing algorithm

Borrowed [here](http://www.myersdaily.org/joseph/javascript/md5-text.html).

Usage:

```javascript
import { md5 } from 'https://tatomyr.github.io/shared-modules/md5.js'

console.log(md5('some string'))
```

## Visibility Sensor

Taken [here](https://vanillajstoolkit.com/helpers/isinviewport/)

Usage:

```javascript
import { trackVisibility } from 'https://tatomyr.github.io/shared-modules/visibility-sensor.js'

…
trackVisibility($element, isInViewport => {
  console.log($element + ' is in viewport:' + isInViewport)
})
…
```

<!-- TODO: Maybe update behavior? -->

## Debounce

Usage:

```javascript
import { debounce } from 'https://tatomyr.github.io/shared-modules/debounce.js'

…
`
  <button
    ::click=${debounce(console.log, ±<timeout>)}
  >
    Click me!
  </button>
`
…
```

Use a positive `timeout` for triggering the callback on the leading edge and a negative one for triggering the callback on the trailing edge.

## Delay

Usage:

```javascript
import { delay } from 'https://tatomyr.github.io/shared-modules/delay.js'

…
delay(<time>)
…
```
