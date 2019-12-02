import * as mod from '.'

describe('dll', () => {
  it('should have pointers to next and prev', () => {
    const list = new mod.DLL()
    list.push(1)
    expect(list.nodes).toEqual([
      {
        next: null,
        prev: null,
        value: 1,
      },
    ])

    list.push(2)
    expect(list.nodes).toEqual([
      {
        next: 2,
        prev: null,
        value: 1,
      },
      {
        next: null,
        prev: 1,
        value: 2,
      },
    ])
  })

  it('should handle unshift', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.unshift(3)
    expect(list.nodes).toEqual([
      {
        next: 1,
        prev: null,
        value: 3,
      },
      {
        next: 2,
        prev: 3,
        value: 1,
      },
      {
        next: null,
        prev: 1,
        value: 2,
      },
    ])
  })

  it('should handle removing', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.push(3)
    list.remove(1) // remove from index 1
    expect(list.nodes).toEqual([
      {
        prev: null,
        value: 1,
        next: 3,
      },
      {
        prev: 1,
        value: 3,
        next: null,
      },
    ])
  })

  it('should handle inserting', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.insert(1, 3) // insert at index 1, value 3
    expect(list.nodes).toEqual([
      {
        prev: null,
        value: 1,
        next: 3,
      },
      {
        prev: 1,
        value: 3,
        next: 2,
      },
      {
        prev: 3,
        value: 2,
        next: null,
      },
    ])
  })

  it('should handle inserting at 0', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.insert(0, 3) // insert at index 0, value 3
    expect(list.nodes).toEqual([
      {
        prev: null,
        value: 3,
        next: 1,
      },
      {
        prev: 3,
        value: 1,
        next: 2,
      },
      {
        prev: 1,
        value: 2,
        next: null,
      },
    ])
  })

  it('should handle inserting at the end', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.insert(2, 3) // insert at index 2, value 3
    expect(list.nodes).toEqual([
      {
        prev: null,
        value: 1,
        next: 2,
      },
      {
        prev: 1,
        value: 2,
        next: 3,
      },
      {
        prev: 2,
        value: 3,
        next: null,
      },
    ])
  })

  it('should handle moving', () => {
    const list = new mod.DLL()
    list.push(1)
    list.push(2)
    list.push(3)
    list.move(1, 0) // move from 1 to 0
    expect(list.nodes).toEqual([
      {
        prev: null,
        value: 2,
        next: 1,
      },
      {
        prev: 2,
        value: 1,
        next: 3,
      },
      {
        prev: 1,
        value: 3,
        next: null,
      },
    ])
  })
})
