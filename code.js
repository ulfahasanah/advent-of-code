//264360-746325

const start = 264360
const end = 746325

function isIncreasing(num) {
  num = String(num)
  return num.split('').every((el, i, arr) => 
    el <= num[i+1] || i == arr.length - 1  
  )
}

function hasTwoAdjacentGroup(num) {
  num = String(num)
  for (let i = 0; i < num.length - 1; i++) {
    if(num[i] == num[i+1]) {
      return true
    }
  }
  return false
}

let match = 0
for (let index = start; index <= end; index++) {
  if(isIncreasing(index) && hasTwoAdjacentGroup(index)) {
    match++
  }
}
console.log(match);