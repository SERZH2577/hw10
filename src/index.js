import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './components/fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

// inputRef.addEventListener('input', onToo);

// console.log(fetchCountries());

// function onToo(e) {
//   console.log(e.target.value);
// }

// function fetchCountries(name) {
//   const URL = `https://restcountries.com/v3.1`;

//   fetch(`${URL}/name/${inputRef.value}`)
//     .then(result => result.json())
//     .then(result => {
//       if (result.length > 10) {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name'
//         );
//       } else if (result.length < 1) {
//         Notiflix.Notify.failure('Oops, there is no country with that name');
//       }

//       console.log(result.length);
//     })
//     .catch(
//       error => Notiflix.Notify.failure(`${error}`)
//       // {
//       // if (error || undefined) {
//       //   Notiflix.Notify.failure('Oops, there is no country with that name');
//       // }
//       // }
//     );
// }

// if (inputRef.value.length >= 1) {
//   console.log(inputRef.value);
//   console.log(params.data);
// } else {
//   Notiflix.Notify.info(
//     'Too many matches found. Please enter a more specific name'
//   );

//   Notiflix.Notify.failure('Oops, there is no country with that name');
// }
