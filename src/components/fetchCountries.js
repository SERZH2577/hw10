const BASE_URL = `https://restcountries.com/v3.1`;

export function fetchCountries(elem) {
  return fetch(`${BASE_URL}/name/${elem.target.value}`).then(result => {
    if (!result.ok) {
      return result.json().then(error => Promise.reject(error));
    }
    return result.json();
  });
}
