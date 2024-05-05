//Getting a resource
let url = 'https://jsonplaceholder.typicode.com';
let query = 'posts';

fetch(`${url}/${query}/1`)
    .then(response => response.json())
    .then(json => console.log(json))

let body = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

//Creating a resource
/* fetch(`${url}/${query}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(response => response.json())
    .then(json => console.log(json)) */

//Updating a resource
let bodyUpdate = {
    id: 1,
    title: 'foo',
    body: 'dog',
    userId: 2,
}
fetch(`${url}/${query}/1`, {
    method: 'PUT',
    body: JSON.stringify(bodyUpdate),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(response => response.json())
    .then(json => console.log(json))


//Patching a resource
fetch(`${url}/${query}/1`, {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Haciendo un patch'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(response => response.json())
    .then(json => console.log(json))


//Deleting a resource
fetch(`${url}/${query}/2`, {
    method: 'DELETE'
})

