// Code your solution here!

//non recursively

// function printString(string){
//   for (let i =0; i<string.length; i++){
//     console.log(string[i])
//   }
// }

function printString(string){
  console.log(string[0])
  if (string.length > 1){
    let secondString = string.slice(1, string.length)
    printString(secondString)
  }else{
    return false
  }
}

//non recurusive
// function reverseString(string){
//   return string.split("").reverse().join("")
// }


function reverseString(string){
  if(string.length <2){
    return string
  }else{

  return reverseString(string.slice(1)) + string[0]
  }
}

//non recursive
// function isPalindrome (string){
//   console.log(string)
//   return string === string.split("").reverse().join("")
// }

function isPalindrome(string){
  if(string.length < 2){
    return true
  }else{
    if(string[0] !== string[string.length-1]){
      return false
    }
    return isPalindrome(string.slice(1, string.length-1))
  }
}

// function addUpTo(array, index){
//   let sum = 0
//   for (let i=0; i<=index; i++){
//     sum += array[i]
//   }
//   return sum
// }

function addUpTo(array, index){
  if (index === 0){
    return array[0]
  }else{
    return array[index] + addUpTo(array, index-1)
  }
}

//non recursive
// function maxOf(array){
//   let temp = 0
//   for (let i=0; i<array.length; i++){
//     if (array[i] > temp){
//       temp = array[i]
//     }
//   }return temp
// }

function maxOf(array){

  if (array.length <2){
    return array[0]
  }
  if (array[0]>array[array.length-1]){
    return maxOf(array.slice(0, array.length-1))
  }else{
    return maxOf(array.slice(1, array.length))
  }
}
//
// function includesNumber(array, number){
//   let yes = 0
//   let no = 0
//   for (let i=0; i<array.length; i++){
//     if (array[i] === number){
//       yes +=1
//     }else{
//       no +=1
//     }
//   }
//   return yes > 0
// }


function includesNumber(array, number){
  if (array.length === 0){
    return false
  }else if(array[0]===number){
    return true
  }else{
    return includesNumber(array.slice(1, array.length), number)
  }
}
