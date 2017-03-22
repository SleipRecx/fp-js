'use strict'

// @tailrec
function sum(set) {
  function loop(set, total) {
    const [h, ...t] = set
    if (h) return loop(t, total + h)
    return total
  }
  return loop(set, 0)
}

// @tailrec
function product(set) {
  function loop(set, total) {
    const [h, ...t] = set
    if (h) return loop(t, total * h)
    return total
  }
  return loop(set, 1)
}

Array.prototype.filter = function (fn) {
  const [head, ...tail] = this
  if (head) {
    if (fn(head)) return [head].concat(tail.filter(fn))
    return [].concat(tail.filter(fn))
  }
  return []
}

Array.prototype.map = function (fn) {
  const [head, ...tail] = this
  if (head) return [fn(head)].concat(tail.map(fn))
  return []
}

Array.prototype.equal = function() {
  const [h1, h2, ...tail] = this
  if (h1 && h2){
    if (h1 !== h2) return false
    return [h2].concat(tail).equal()
  }
  return true
}

function map(set, fn) {
  const [head, ...tail] = set
  if (head) return [fn(head)].concat(map(tail,fn))
  return []
}

function filter(f, set) {
  const [h, ...t] = set
  if (h) {
    if (f(h)) return [h].concat(filter(f,t))
    return [].concat(filter(f,t))
  }
  return []
}

function equal(set) {
  const [h1, h2, ...tail] = set
  if (h1 && h2){
    if (h1 !== h2) return false
    return equal([h2].concat(tail))
  }
  return true
}

const cars = [
  {type:"Fiat", model:"500", color:"white"},
  {type:"Merce", model:"300", color:"black"},
]

const ints = [1, 1, 1, 1]
const ints2 = [1, 1, 2, 1]

console.log(ints.equal())
console.log(ints2.equal())
console.log(cars.map(e => e.type))
