console.log("Welcome from Add Post to External API");

var postForm = document.getElementById("postForm");

postForm.addEventListener("submit", addPost);

function addPost(e) {
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('data').value;

    //so first of all we need to specify the url at which we want to add the post - https://jsonplaceholder.typicode.com/posts - then we will pass the second argument which is actually an object containing method, headers and body.

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then( (res) => { return res.json(); } )
    .then( (data) => { console.log(data) } )
}