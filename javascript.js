// q1: Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

// const findSum=(array)=>{
//     let sum=0;
//     for(let x=0;x<array.length;x++){
//       if(array[x] % 2 === 0){
//         sum += array[x]
//       }
//     }
//     return sum;
// }

// let array=[1,2,3,4,5];
// let sumOfArray=findSum(array);
// console.log(sumOfArray)




// q2: Write a function that takes an array of strings and returns the longest string in the array.


//  function longestString(array){
//     let longest="";
//     for(let x=0;x<array.length;x++){
//       if(  array[x].length>longest.length){
//         longest =array[x];
//       }
      
        
        
//     }
//     return longest;
 
//  }

//  let array =["ali","aban","abdullah","shahbaz"]

//  const longstring=longestString(array);
//  console.log(longstring);


//q3:  Write a function that takes an array of numbers and returns a new array with all the numbers doubled.



// function doubled(array){
//     let newArr=[]
//     for(let x=0;x<array.length;x++){
//         newArr.push(array[x]*2)
//     }
//     return newArr;
// }
// let array=[2,3,4,5];
// console.log(doubled(array))

//Q4:  Write a function that takes two arrays of numbers and returns a new array with all the common elements between the two arrays.


// function common(arr1,arr2){
//     let newArr=[];
//     for(let y=0;y<arr1.length;y++){
//         if(arr2.includes(arr1[y])){
//             newArr.push(arr1[y])
//         }
//     }
//     return newArr;
// }

// let arr1=[1,2,3,4,5];
// let arr2=[3,4,5,5,6,7];
// console.log(common(arr1,arr2))

//Q5  Write a function that takes an array of objects with a "name" property and returns a new array of just the names.


// function returnNames(array){
//     let newArr=[];
//     for(let y=0;y<array.length;y++){
//         newArr.push(array[y].name)
        
//     }
//     return newArr
// }

// let array=[
//     {
//         name:"shahbaz",
//         age:"25"
//     },
//     {
//         name:"aban",
//         age:"10"
//     }
// ]
// console.log(returnNames(array))



//Q6 :Write a function that takes an array of numbers and returns the second lowest and second greatest numbers in the array.



// function findNumber(arr){
//     const sortedArr=arr.sort((a,b) => a-b);
//     const secondLowest=sortedArr[1];
//     const secondGreater=sortedArr[sortedArr.length-2]
//     return [secondLowest,secondGreater];

// }

// let arr = [5,3,2,9,6,4];
// console.log(findNumber(arr));


//Q7: Write a function that takes an array of numbers and returns the product of all the numbers in the array.

// function findProduct(array){
//     let  product=[1];
//     for(let m=0;m<array.length;m++){
//         product *= array[m];
//     }
//     return product;
// }

// let array=[1,2,3,4,5];
// console.log(findProduct(array))


//Q8 Write a function that takes an array of strings and returns a new array with all the strings sorted alphabetically.


// function sortedArr(array){
//     const newArr=array.sort()
//     return newArr

// }

// let array=["ramzan","ali","aban","shahbaz"]
// console.log(sortedArr(array));


//Q9: Write a function that takes an array of strings and returns a new array with all the strings capitalized.


// function upperCase(array){
//     let newArr=[];
//     for(let i=0;i<array.length;i++){
//         newArr.push(array[i].toUpperCase())
//     }
//     return newArr;
// }

// let array=["ali","aban","shahbaz"];
// console.log(upperCase(array))


//Q10: Write a function that takes an array of numbers and returns the average of all the numbers in the array.


// function findAverage(array){
//     let average=[]
//      let sum=0
//     for(let i=0;i<array.length;i++){
//         sum +=array[i];
//         average =(sum/2)

//     }
//     return average;
// }

// let array=[1,2,3,4,5]
// console.log(findAverage(array))