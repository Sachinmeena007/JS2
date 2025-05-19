
//Q1 switch days
// let daynumber=parseInt(prompt("Enter a number (1-7) to get the day:"));

// switch(daynumber){

// case 1: alert("Sunday");
// break;
// case 2: alert("Monday");
// break;
// case 3: alert("Tuesday");
// break;
// case 4: alert("Wednesday");
// break;
// case 5: alert("Thursday");
// break;
// case 6: alert("Friday");
// break;
// case 7: alert("Saturday");
// break;
// default: alert("Invalid Number");

// }


//Q2= sum of all elements

// let arr=[2,4,6,8,10]

// let sum=0;

// for(let i=0;i<arr.length;i++){

// sum=sum+arr[i];

// }
// console.log(sum);

//Q3 find the maximum number of an array

 //let arr=[3,7,2,9,5];
// let max=arr[0];

// for(let i=0;i<arr.length;i++){
// if(arr[i]>max){
//     max=arr[i];
// }


// }
 ///console.log(max)

// 
//Q4 Count even and odd number 

// let arr=[1,2,3,4,5,6,7,8,9];
// let even=0;
// let odd=0;
// for(let i=0;i<arr.length;i++){

//     if(arr[i]%2==0){
//         even++;

//     }
//     else{
//        odd++;
//     }
// }
// console.log(even);
// console.log(odd);

// Q4 Reverse an array
  
// let arr=[10,20,30,40,50]

// let revarr=[];
// for(let i=arr.length-1;i>0;i--){
// revarr.push(arr[i])

// }
//console.log(revarr)

//Q5 Check element exists an array

// let arr=[3,5,7,9,11]
// let element=9;
// if(arr.includes(element)){
//     console.log("Elemet exists ")
// }
// else{
//     console.log("Elemet not exists ")
// }

// Marge two array
// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// arr1.push(...arr2)
// console.log(arr1)

// Number printing 

// let num=parseInt(prompt("Enter any number "));
// let output="";
// for(let i=1;i<=num;i++){
//     output+=i+"";
// }

// alert(output)
// console.log(output);

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
let marge=[];
for(let i=0;i<arr1.length;i++){

    marge.push(arr1[i])
}
for(let i=0;i<arr2.length;i++){

    marge.push(arr2[i]);
}
console.log(marge)