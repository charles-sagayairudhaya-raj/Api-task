fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
        const usDollarCountries = data.filter((country) => {
            return country.currencies && country.currencies.USD;
        });
        const usDollarCountriesList = document.getElementById('usDollarCountries');
        usDollarCountries.forEach((country) => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name.common;
            usDollarCountriesList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
