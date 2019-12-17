const xhr = new XMLHttpRequest()

xhr.addEventListener('loadend', (event) => {
    const users = JSON.parse(event.target.response);
    console.log(users)
})
xhr.addEventListener('error', () => {
    console.log('I didn\'t do it! Hmm.')
})

const getUser = (id)=> {

    xhr.open('GET', `http://localhost:3000/user/${id}`);
    xhr.send();


}