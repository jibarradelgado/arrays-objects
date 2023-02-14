//1. map
let list = [1, 2, 3, 4]
let result = list.map(element => element * 2)
console.log(`map result is: ${result}`)

//2. filter
result = list.filter(element => element % 2 === 0)
console.log(`filter result is: ${result}`)

//3 - 4. reduce
result = list.reduce((total, item) => {
  console.log(item)
  return total + item
}, 0)
console.log(`reduce result is: ${result}`)

result = list.reduceRight((total, item) => {
  console.log(item)
  return total + item
}, 0)
console.log(`reduce right result is: ${result}`)

//5. fill
list.fill(0)
console.log(`fill with 0: ${list}`)

//6. find
list = [1,2,3,4,5]
result = list.find(element => element === 3)
console.log(`find result: ${result}`)

//7 - 9. indexOf
list = [1,2,3,4,5,1]
result = list.indexOf(1)
console.log(`indexOf result: ${result}`)

result = list.lastIndexOf(1)
console.log(`lastIndexOf result: ${result}`)

result = list.findIndex(element => element > 3)
console.log(`findIndex result: ${result}`)

//10. includes
result = list.includes(5)
console.log(`includes result: ${result}`)

//11. pop
result = list.pop()
console.log(`pop result: ${result}`)
console.log(`pop resulting list: ${list}`)

//12. push
result = list.push(1)
console.log(`push result: ${result}`)
console.log(`push resulting list: ${list}`)

//13. shift
result = list.shift()
console.log(`shift result: ${result}`)
console.log(`shift resulting list: ${list}`)

//14. unshift
result = list.unshift(1)
console.log(`unshift result: ${result}`)
console.log(`unshift resulting list: ${list}`)

//15. splice
result = list.splice(1,2)
console.log(`splice result: ${result}`)
console.log(`splice resulting list: ${list}`)

//16. slice
result = list.slice(1,3)
console.log(`slice result: ${result}`)
console.log(`slice resulting list: ${list}`)

//17. join
result = list.join('')
console.log(`join result: ${result}`)

//18. reverse
list = [1,2,3,4,5]
console.log(`list before reverse: ${list}`)
list.reverse()
console.log(`list after reverse: ${list}`)

//19. sort
result = list.sort((a,b) => a - b)
console.log(`sort result: ${result}`)
console.log(`list after sort: ${list}`)

//20. some
result = list.some(element => element === 3)
console.log(`some for 3: ${result}`)

//21. every
result = list.every(element => element === 3)
console.log(`every for 3: ${result}`)

//22. from
const string = "stringy"
console.log(`from string ${Array.from(string)}`)

const set = new Set([1,2,3,2,1])
console.log(`from set: ${Array.from(set)}`)

const range = (n) => Array.from({length: n}, (_, i) => i + 1)
console.log(`range 10 using from: ${range(10)}`)

//23. of
list = Array.of(1, 2, 3, 4, 5)
console.log(`of resulting list: ${list}`)

//24. isArray
console.log(`isArray of array: ${Array.isArray(list)}`)
console.log(`isArray of primitive: ${Array.isArray(5)}`)
console.log(`isArray of object: ${Array.isArray({"element": "value"})}`)

//25. at
// list = [1,2,3,4,5]
// result = list.at(1)
// console.log(`at of 1: ${result}`)

//26. copyWithin
result = list.copyWithin(0, 2, 4)
console.log(`copyWithin list result: ${result}`)

//27. flat
list = [1, 2, [3, 4, [5, 6]]]
console.log(`list before flat: ${list}`)
console.log(`list after flat: ${list.flat(Infinity)}`)

//28. flatMap
list = [1, 2, 3]
result = list.flatMap((el) => [el, el * el])
console.log(`flatMap list: ${list}`)
console.log(`flatMap result: ${result}`)