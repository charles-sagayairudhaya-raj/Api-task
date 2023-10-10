fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {

        const totalPopulation = data.reduce((acc, country) => {
            return acc + (country.population || 0);
        }, 0);
        const totalPopulationElement = document.getElementById('totalPopulation');
        totalPopulationElement.textContent = `Total Population: ${totalPopulation}`;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
