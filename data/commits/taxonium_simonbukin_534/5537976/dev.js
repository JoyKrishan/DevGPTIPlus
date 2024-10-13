const newCountryMap = {};
for (const country of countries) {
  newCountryMap[country.name] = {
    latitude: country.latitude,
    longitude: country.longitude,
  };
}

newCountryMap["England"] = newCountryMap["United Kingdom"];
newCountryMap["Wales"] = newCountryMap["United Kingdom"];
newCountryMap["Scotland"] = newCountryMap["United Kingdom"];
newCountryMap["Northern Ireland"] = newCountryMap["United Kingdom"];
newCountryMap["Northern_Ireland"] = newCountryMap["United Kingdom"];
newCountryMap["USA"] = newCountryMap["United States"];
newCountryMap["Viet Nam"] = newCountryMap["Vietnam"];
newCountryMap["West Bank"] = newCountryMap["Palestinian Territories"];

    if (getCoordinateFromCountry(country)) {
      coords.push(getCoordinateFromCountry(country));
export const getCoordinateFromCountry = (countryName) => {
  return newCountryMap[countryName];
};
