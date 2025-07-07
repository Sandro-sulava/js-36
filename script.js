const getInfo = document.querySelector("#get-info");
const countryInfo = document.querySelector("#country-info");

function getCountryInfo() {
  const country = document.querySelector("#countryInput").value;

  if (!country) {
    alert("Please enter a country name");
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const countryData = data[0];
      countryInfo.innerHTML = `
       <h2>${countryData.name.common}</h2>
       <img src="${countryData.flags.png}" alt="${countryData.name.common} flag">
      `;
    })
    .catch((error) => {
      console.log(error);
      countryInfo.textContent = "Country not found";
    });
}

getInfo.addEventListener("click", function () {
  getCountryInfo();
});

const countryInput = document.querySelector("#countryInput");

countryInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getCountryInfo();
  }
});
