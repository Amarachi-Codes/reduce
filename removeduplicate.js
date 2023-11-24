// Remove the duplicate from the given Array

const arr = [2,5,7,5,12,9,7,5,4,,5,2,5,1,4]

const removeDuplicate = (arr)=>{
    return arr.reduce((acc, curValue)=>{
        if(acc.indexOf(curValue)=== -1){
            acc.push(curValue)
        }return acc
    },[])
}
console.log(removeDuplicate(arr));