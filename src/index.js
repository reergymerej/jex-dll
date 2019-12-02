const updatePropIf = (prop) => (obj, value) => {
  if (obj) {
    const result = {...obj}
    result[prop] = value ? value : null
    return result
  }
}

const updateNext = updatePropIf('next')
const updatePrev = updatePropIf('prev')

export default class DLL {
  nodes = []

  get prev() {
    return this.nodes.length
      ? this.nodes[this.nodes.length - 1]
      : null
  }

  push = (value) => {
    const { prev } = this
    if (prev) {
      prev.next = value
    }
    this.nodes.push({
      next: null,
      prev: prev ? prev.value : null,
      value,
    })
  }

  unshift = (value) => {
    const next = this.nodes[0]
    if (next) {
      next.prev = value
    }
    this.nodes.unshift({
      next: next ? next.value : null,
      prev: null,
      value,
    })
  }

  spliceNewNodes = (index, before, node, after) => {
    const newNodes = [before, node, after].filter(x => x)
    if (before) {
      this.nodes.splice(index - 1, newNodes.length - 1, ...newNodes)
    } else {
      this.nodes.splice(index, newNodes.length - 1, ...newNodes)
    }
  }

  setIfPresent = (index, node) => {
    if (this.nodes[index]) {
      this.nodes[index] = node
    }
  }

  remove = (fromIndex) => {
    const node = this.nodes[fromIndex]
    if (node) {
      let before = this.nodes[fromIndex - 1]
      let after = this.nodes[fromIndex + 1]
      before = updateNext(before, after.value)
      after = updatePrev(after, before ? before.value : null)
      before = this.setIfPresent(fromIndex - 1, before)
      after = this.setIfPresent(fromIndex + 1, after)
      this.nodes.splice(fromIndex, 1)
      return node
    }
  }

  insert = (index, value) => {
    let before = this.nodes[index - 1]
    let after = this.nodes[index]
    let node = {
      value,
    }
    before = updateNext(before, value)
    node = updateNext(node, after ? after.value : null)
    node = updatePrev(node, before ? before.value : null)
    after = updatePrev(after, value)
    this.spliceNewNodes(index, before, node, after)
  }

  move = (fromIndex, toIndex) => {
    const node = this.remove(fromIndex)
    if (node) {
      this.insert(toIndex, node.value)
    }
  }
}
