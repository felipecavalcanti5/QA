const fetch = require('node-fetch');
const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people1')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            return{
                count: data.count,
                results: data.results
            }
        })
}

getPeople(fetch)

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people1');
    const data = await getRequest.json()
    console.log(data);
    return{
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}