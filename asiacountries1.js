fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
        const lowPopulationCountries = data.filter((country) => country.population < 200000);
        const lowPopulationCountryNames = lowPopulationCountries.map((country) => country.name.common);
        
    const countryList = document.getElementById('countryList');
        lowPopulationCountryNames.forEach((name) => {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            countryList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
