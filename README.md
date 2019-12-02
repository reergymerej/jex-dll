# jex-dll

a doubly-linked list

[![Build Status](https://travis-ci.org/reergymerej/jex-dll.svg?branch=master)](https://travis-ci.org/reergymerej/jex-dll)

```js
import DLL from 'jex-dll'
const list = new DLL()
```

Append to the list.
```js
list.push('hello')
list.push('kitty')

list.nodes
[
  {
    prev: null,
    value: 'hello',
    next: 'kitty',
  },
  {
    prev: 'hello',
    value: 'kitty',
    next: null,
  },
]
```

Prepend to the list.
```js
list.unshift('banana')

list.nodes
[
  {
    prev: null,
    value: 'banana',
    next: 'hello',
  },
  {
    prev: 'banana',
    value: 'hello',
    next: 'kitty',
  },
  {
    prev: 'hello',
    value: 'kitty',
    next: null,
  },
]
```

Remove stuff by index.
```js
list.remove(0)

list.nodes
[
  {
    prev: null,
    value: 'hello',
    next: 'kitty',
  },
  {
    prev: 'hello',
    value: 'kitty',
    next: null,
  },
]
```
Insert at index.

```js
list.insert(1, 'apples')

list.nodes
[
  {
    prev: null,
    value: 'hello',
    next: 'apples',
  },
  {
    prev: 'hello',
    value: 'apples',
    next: 'kitty',
  },
  {
    prev: 'apples',
    value: 'kitty',
    next: null,
  },
]
```

Move stuff from one index to another.
```js
list.move(0, 2)

list.nodes
[
  {
    prev: null,
    value: 'apples',
    next: 'kitty',
  },
  {
    prev: 'apples',
    value: 'kitty',
    next: 'hello',
  },
  {
    prev: 'kitty',
    value: 'hello',
    next: null,
  },
])
```
