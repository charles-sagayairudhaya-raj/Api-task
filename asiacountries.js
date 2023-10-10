const fetch = require('node-fetch');

// Fetch data from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    const asiaCountries = data.filter((country) => country.region === 'Asia');
    const asiaCountryNames = asiaCountries.map((country) => country.name.common);
    
    console.log('Countries in Asia:', asiaCountryNames);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
