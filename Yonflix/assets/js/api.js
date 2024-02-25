'use strict';

const api_key = '3a6eab0c2fb3db817164f7cfffc7a159';

const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * fetch data from a server using 'url' and passes the result in 
 * json data to a callback' function, along with an optional 
 * parameter if has 'optionalParam'.
 * 
 */

const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };