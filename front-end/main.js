const xhr = new XMLHttpRequest()

xhr.addEventListener('loadend', (event) => {
    const users = JSON.parse(event.target.response);
})
xhr.addEventListener('error', () => {
    console.log('I didn\'t do it! Hmm.')
})

xhr.open('GET', 'http:local//localhost:3000/users');
xhr.send();