var btnJson = document.getElementById("getJson");

btnJson.addEventListener('click', getJson);

function getJson() {
    fetch('sample.json')
    .then( (response) => { return response.json() })
    .then( (data) => { 
        console.log(data);
        var output = "";
        for(var i in data) {
            output += `
                <h4>Id: ${data[i].id} </h4>
                <h4>Name: ${data[i].name}</h4>
                <h4>Age: ${data[i].age}</h4>
            `;
        }

        document.getElementById("app").innerHTML = output;
     } )
    .catch( (err) => { console.log(err) } )

    
}