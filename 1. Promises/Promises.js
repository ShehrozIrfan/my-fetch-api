console.log("Welcome from promises...");

/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:

= pending: initial state, neither fulfilled nor rejected.
= fulfilled: meaning that the operation was completed successfully.
= rejected: meaning that the operation failed.
*/

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            const error = true;
            if(error) {
                reject("Sorry! Your payment was not successful");
            } else {
                resolve("Your payment was successful");
            }

        }, 3000 );
        console.log("It will take 3 seconds..");
    });
}

buyFlightTicket() 
//if the operation is successfully completed the below method will be called
.then( (success) => console.log(success))
//if the operation is not completed successfully then 'catch' will be called
.catch( (error) => console.log(error) );


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userDate = new Promise((resolve, reject) => {
    const error = false;

    if(error) {
        reject("404 - Page Not Found");
    } else {
        resolve(
            {
                name: "John Doe",
                age: 25,
                email: "johndoe@yahoo.com"
            }
        );
    }
});

userDate
.then( (data) => console.log(data) )
.catch( (error) => console.log(error) );