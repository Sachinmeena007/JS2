// let details={

//     name:"sachin",age:21,city:"bhopal",
//     fruites:["mango","apple,","papaya","banana"]
    
// }
// console.log(details.city) // object acces
// details.college="lnct"; //add data
// delete details.age   // delete
// details.age=26;  //update
// console.log(details)
// console.log(details.fruites[3])

//object ka name currlye barsces ke anadar kye and value ke pair main kye uniqe honi chaiye

let welcome={
    name:"sachin",
    city:"bhopal",
    age:21
}
for(let i in welcome){
    console.log(i+ "=> "+welcome[i])
}