function onLoad() {
    document.querySelector('#showAll').addEventListener('click', btnshowAllClick);
    document.querySelector('#showPerson').addEventListener('click', btnShowPersonClick);
    document.querySelector('#showDirect').addEventListener('click', btnshowDirectClick);
    document.querySelector('#showChar').addEventListener('click', btnshowCharClick);
}

function btnshowAllClick() {
    console.log('clicked');
    const url = 'https://swapi.dev/api/people/';
    sendGetRequest(url, showPerson);
    // sendGetRequest(url, findPerson);
    const url2 = 'https://swapi.dev/api/films/';
    sendGetRequest(url2, showDirect);
    sendGetRequest(url2, showChar);
}

function btnShowPersonClick() {
    const url = 'https://swapi.dev/api/people/';
    sendGetRequest(url, showPerson);
}

function btnshowDirectClick() {
    const url = 'https://swapi.dev/api/films/';
    sendGetRequest(url, showDirect);
}
function btnshowCharClick() {
    const url = 'https://swapi.dev/api/films/';
    sendGetRequest(url, showChar);
}

function sendGetRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.response);
        }
    });
    xhr.open('GET', url);

    xhr.send();
}

function showPerson(response) {
    let people = response.results;
    let found = 0;
    if (response.next && !found) {
        sendGetRequest(response.next, showPerson);
    }
    let detailes = document.querySelector('#detail');
    people.forEach(person => {
        if (person.name == "Luke Skywalker") {
            console.log("Luke Skywalker");
            detailes.insertAdjacentHTML('beforeend', `<br> ${person.height}     ${person.eye_color} `);
            found = 1;
        }
    });

    detailes.classList.remove('hidden');

}

function showDirect(response) {
    let films = response.results;
    if (response.next) {
        sendGetRequest(response.next, showDirect);
    }

    let detailes = document.querySelector('#detail');

    films.forEach(film => {
        if (film.director == "George Lucas") {
            console.log("George Lucas");
            detailes.insertAdjacentHTML('beforeend', `<br> ${film.title}   `);
        }
    });

    detailes.classList.remove('hidden');
}

function showChar(response) {
    let films = response.results;
    if (response.next) {
        sendGetRequest(response.next, showChar);
    }

    let detailes = document.querySelector('#detail');
    
    films.forEach(film => {
        for (let i = 0; i < film.characters.length; i++) {
            if (film.characters[i] == `https://swapi.dev/api/people/4/`) {
                detailes.insertAdjacentHTML('beforeend', `<br> ${film.title}   `);
            }
        }
    });

    detailes.classList.remove('hidden');
}
// function findPerson(response){
//     let people = response.results;
//     let num=0;
//     if (response.next) {
//         sendGetRequest(response.next, findPerson);
//     }
//     let detailes = document.querySelector('#detail');
//     people.forEach(person => {
//         if (person.name == "Darth Vader") {
//             console.log("Darth Vader name");
//             num++;
//             return num;
//         }
//     });
// }

// function showChar(response) {
//     let people = response.results;
//     let found = 0;
//     if (response.next && !found) {
//         sendGetRequest(response.next, showPerson);
//     }
//     let detailes = document.querySelector('#detail');
//     people.forEach(person => {
//         if (person.name == "Darth Vader") {
//             console.log("Darth Vader");
//             detailes.insertAdjacentHTML('beforeend', `${person.films} `);
//             found = 1;
//         }
//     });

//     detailes.classList.remove('hidden');

// }

document.addEventListener('DOMContentLoaded', onLoad);