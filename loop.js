// use foreach and for to loop through the below array

const fruits = ["pineapple","apple","mango","orange","banana"]

const getFruits = (fruits)=>{
    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
}
getFruits(fruits)