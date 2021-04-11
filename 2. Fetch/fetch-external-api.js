console.log("Welcome from fetch-external-api");

/* 
In this we're using API from JSON Placeholder
https://jsonplaceholder.typicode.com/posts
*/

var btnData = document.getElementById("getApi");

btnData.addEventListener('click', loadData);

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (res) => {
        return res.json();
    } )
    .then( (data) => {
        var output = '<h3>Posts</h3>';
        data.forEach( (data) => {
            output += `
                <div>
                    <h3>${data.title}</h3>
                    <p>${data.body}</h3>
                </div>
            `;
        } )
        document.getElementById("app").innerHTML = output;
    } )
}