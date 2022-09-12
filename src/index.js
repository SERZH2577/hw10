import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './components/fetchCountries';
import {
  shortDescriptionCountry,
  extendedDescriptionCountry,
} from './components/templates';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onCreatesCountry, DEBOUNCE_DELAY));

function onCreatesCountry(elem) {
  fetchCountries(elem)
    .then(countries => {
      if (countries.length > 10) {
        countryListRef.innerHTML = '';
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
      } else if (countries.length > 1 && countries.length < 11) {
        countryInfoRef.innerHTML = '';
        countryListRef.innerHTML = countries
          .map(country => shortDescriptionCountry(country))
          .join('');
      } else {
        countryListRef.innerHTML = '';
        countryInfoRef.innerHTML = countries
          .map(country => extendedDescriptionCountry(country))
          .join('');
      }
    })
    .catch(error => {
      console.log(error);

      countryListRef.innerHTML = '';
      countryInfoRef.innerHTML = '';

      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
