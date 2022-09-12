export function shortDescriptionCountry(country) {
  const { flags, name } = country;

  return `
		<li class="country-list_item">
			<div class="country-list_item-block">
				<img src="${flags.svg}" alt="" width="40" height="24">
				<h2 class="country-list_item-title">${name.official}</h2>
			</div>
		</li>
	`;
}

export function extendedDescriptionCountry(country) {
  const { flags, name, capital, population, languages } = country;
  const countryLanguages = Object.values(languages).join(', ');

  return `
		<div class="country-info_block">
			<img src="${flags.svg}" alt="" width="50" height="30">
			<h2 class="country-info_title">${name.official}</h2>
		</div>
		<ul class="country-info_list list">
      <li class="country-info_list-item">
				<p class="country-info_list-description"><b>Capital:</b> ${capital}</p>
			</li>
      <li class="country-info_list-item">
				<p class="country-info_list-description"><b>Population:</b> ${population}</p>
			</li>
      <li class="country-info_list-item">
				<p class="country-info_list-description"><b>Languages:</b> ${countryLanguages}</p>
			</li>
    </ul>
	`;
}
