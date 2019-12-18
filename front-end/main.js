const xhr = new XMLHttpRequest()

const getUsers = ()=> {
    xhr.open('GET', `http://localhost:3000/user/`);
    xhr.send();
}

// const getUser = (id)=> {
//     xhr.open('GET', `http://localhost:3000/user/${id}/`);
//     xhr.send();
// }

// const getFriends = (id)=> {
//     xhr.open('GET', `http://localhost:3000/user/${id}/`);
//     xhr.send();
// }

const postUser = (id, age, eyeColor, name) => {
    xhr.open('POST', `http://localhost:3000/user/`);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({
        "id": id,
        "age": age,
        "eyeColor": eyeColor,
        "name": name,
        "friends": [{
            "id": 0,
            "name": "Ruby Rogers"}]
    }));
}

const console = ()


xhr.addEventListener('loadend', (event) => {
    const users = JSON.parse(event.target.response);
    console.log(users)
})

// xhr.addEventListener('loadend', (event) => {
//     const users = JSON.parse(event.target.response);
//     console.log(users.friends)
// })

xhr.addEventListener('error', () => {
    console.log('I didn\'t do it! Hmm.')
})