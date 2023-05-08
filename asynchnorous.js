// Question1
// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

function run(){
    console.log("I love running in the morning")
}
setTimeout(run,3000);

// Question2
// You have an array of user IDs and a function getUserData(id) that returns a Promise 
// with user data when given a user ID. Write an asynchronous function that fetches 
// and logs the data for each user ID one by one, in sequence.
let personalId = ['John',20,'5ft',"60kgs"]




// Question3
// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.
 let success = true;

 let performTask = new Promise(function(resolve,reject){
    if(success){
        resolve("Task completed successfully");
    }
    else{
        reject("The task was unsuccessful");
    }
 });

 let determineSuccess =async()=>{
    let output=await performTask;
    console.log({output})
 };
 determineSuccess();
