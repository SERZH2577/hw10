import Notiflix from 'notiflix';

export function fetchCountries(e) {
  const URL = `https://restcountries.com/v3.1`;
  // console.log(e.currentTarget.elements.value);
  // console.log(e.target.value);

  fetch(`${URL}/name/${e.target.value}`)
    .then(result => result.json())
    .then(result => {
      result.map(el => console.log(el.name.official));

      if (result.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
      } else if (result.length < 1) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    })
    .catch(
      error => Notiflix.Notify.failure(`${error}`)
      // {
      // if (error || undefined) {
      //   Notiflix.Notify.failure('Oops, there is no country with that name');
      // }
      // }
    );
}
