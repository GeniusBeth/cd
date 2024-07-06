let num = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7]

const greaterThan = (input, m) => {
    let newA = []
    for(let i=0; i<input.length; i++){
        let n = input[i]
    if(n>m){
      newA.push(n)
    }
 }
 return newA
}
console.log(greaterThan(num, 5))

// lessThan
const lessThan = (input, m) => {
    let newA = []
    for(let i=0; i<input.length; i++){
        let n = input[i]
    if(n<m){
      newA.push(n)
    }
 }
 return newA
}
console.log(lessThan(num, 5))

// equal to
const equalTo = (input, m) => {
    let newA = []
    for(let i=0; i<input.length; i++){
        let n = input[i]
    if(n===m){
      newA[i] = n
    }
 }
 return newA
}
console.log(equalTo(num, 3))



const filt = (input, sieve) => {
    let newArr = [];
    for(let i=0; i<input.length; i++){
       let fill = input[i]
       if(sieve(fill)){
        newArr.push(fill)
       }
    }
    return newArr;
}
console.log(filt(num, (a) => a > 2))
console.log(filt(num, (a) => a < 2))
console.log(filt(num, (a) => a === 3))

console.log(num.filter(a => a > 5))
console.log(num.filter(a => a <  5))
console.log(num.filter(a => a ===  5))

