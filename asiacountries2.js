fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
    
        const countryDetailsList = document.getElementById('countryDetails');
        data.forEach((country) => {
            const listItem = document.createElement('li');
            const name = country.name.common;
            const capital = country.capital[0] 
            const flag = country.flags.png;
            const flagImage = document.createElement('img');
            flagImage.src = flag;
            flagImage.alt = `${name} Flag`;
            flagImage.width = 50;
            listItem.textContent = `Name: ${name}, Capital: ${capital}`;
            listItem.appendChild(flagImage);
            countryDetailsList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
