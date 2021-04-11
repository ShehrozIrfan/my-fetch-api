console.log("Welcome from App.js");

const btnText = document.getElementById("getText");

btnText.addEventListener('click', loadData);

function loadData() {

    //Below is the working of fetch API using ES5
    
    fetch('sample.txt')
    .then(function(response) {
        //It will provide all the details that we got as a response.
        //console.log(response);
        //It will show the promise object, which contains the status of the promise and the promise result.
        //console.log(response.text());
        //so, to display the text that we got as a response we need to return that.
        return response.text();
    })
    //after returning the response now we can show that.
    .then(function(data) {
        console.log(data);
        document.getElementById("app").innerHTML = data;
    })
    //so if we want to catch the errors we can do the below:
    .catch(function(err) {
        console.log(err);
    })
    
    //=====================================================

    //Below is the working of fetch API using ES6
    /*
    fetch('sample.txt')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("app").innerHTML = data;
    })
    */
}