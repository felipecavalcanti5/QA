const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (done) => {
    expect.assertions(1) //we expect n assertions (expect)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        done();
    })
})

/*
it('calls swapi to get people', () => {
    expect.assertions(1) //we expect n assertions (expect)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})*/

it('calls swapi to get people with a promise', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})

/*
it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        
        expect(data.count).toEqual(87)
        expect(data.results.lenght).toBeGreaterThan(5)
    })
})*/

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.lenght).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people1')
        expect(data.count).toEqual(87)
        expect(data.results.lenght).toBeGreaterThan(5)
    })
})