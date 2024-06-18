// import React from 'react'
'use client'
import axios from "axios"
import { useState, useEffect } from "react";
const page = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchDataState = async () => {
    const stateData = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json");
    console.log("fetchDataState------->", stateData.data);
    return stateData.data;
  }

  const fetchDataCity = async () => {
    const CityData = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json");
    console.log("fetchDataState------->", CityData.data);
    return CityData.data;
  }

  const handleCountries = async (cont) => {
    console.log(cont)
    const stateDatta = await fetchDataState();
    console.log("stateData------>", stateDatta);

    const state = stateDatta.filter((item) => {
      return item.country_name == cont;
    })
    console.log("filteredState--->", state);
    setStates(state);
  }

  const handleState = async (stat) => {
    console.log(stat)
    const cityDatta = await fetchDataCity();
    console.log("cityData------>", cityDatta);

    const city = cityDatta.filter((item) => {
      return item.state_name == stat;
    })
    console.log("filteredCity--->", city);
    setCities(city);
  }
  const fetchDataCountry = async () => {
    let result = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json");
    // console.log(result.data);
    setCountries(result.data);
  }

  useEffect(() => {
    fetchDataCountry();
    // fetchDataState();

  }, []);

  return (
    <div>
      <table style={{width:"100%"}}>

        <thead>
          <tr  style={{display:"flex", justifyContent:"space-around"}}>
            <th>
              Country List
            </th>
            <th>
              State List
            </th>
            <th>
              City List
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{display:"flex", justifyContent:"space-around"  }}>
            <td>
              {countries.map((country, i) => (
                <li key={i} onClick={() => { handleCountries(country.name) }}>
                  {country.name}
                </li>
              ))}
            </td>
            <td>
              {states.map((state, i) => (
                <li key={i} onClick={() => { handleState(state.name) }}>
                  {state.name}
                </li>
              ))}
            </td>
            <td>
              {cities.map((city, i) => (
                <li key={i}>
                  {city.name}
                </li>
              ))}
            </td>
          </tr>
        </tbody>

        

      </table>
      {/* <ul>
        {countries.map((country, i) => (
          <li key={i} onClick={() => { handleCountries(country.name) }}>
            {country.name}
          </li>
        ))}
        <br /><hr />
        {states.map((state, i) => (
          <li key={i} onClick={() => { handleState(state.name) }}>
            {state.name}
          </li>
        ))}
        <br /><hr />
        {cities.map((city, i) => (
          <li key={i}>
            {city.name}
          </li>
        ))}



      </ul> */}
    </div>
  )
}

export default page

// // import React from 'react'
// // import React from 'react'
// 'use client'
// import axios from "axios";
// import { useState, useEffect } from "react";

// const CountryList = ({ countries, handleCountries }) => (
//   <div>
//     <h2>Country List</h2>
//     <ul>
//       {countries.map((country, i) => (
//         <li key={i} onClick={() => handleCountries(country.name)}>
//           {country.name}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const StateList = ({ states, handleState }) => (
//   <div>
//     <h2>State List</h2>
//     <ul>
//       {states.map((state, i) => (
//         <li key={i} onClick={() => handleState(state.name)}>
//           {state.name}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const CityList = ({ cities }) => (
//   <div>
//     <h2>City List</h2>
//     <ul>
//       {cities.map((city, i) => (
//         <li key={i}>{city.name}</li>
//       ))}
//     </ul>
//   </div>
// );

// const Page = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const fetchDataState = async () => {
//     const stateData = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json");
//     return stateData.data;
//   };

//   const fetchDataCity = async () => {
//     const CityData = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json");
//     return CityData.data;
//   };

//   const handleCountries = async (cont) => {
//     const stateDatta = await fetchDataState();
//     const state = stateDatta.filter((item) => item.country_name === cont);
//     setStates(state);
//     setCities([]);
//   };

//   const handleState = async (stat) => {
//     const cityDatta = await fetchDataCity();
//     const city = cityDatta.filter((item) => item.state_name === stat);
//     setCities(city);
//   };

//   const fetchDataCountry = async () => {
//     const result = await axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json");
//     setCountries(result.data);
//   };

//   useEffect(() => {
//     fetchDataCountry();
//   }, []);

//   return (
//     <div>
//       <h1>Country, State, and City List</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <CountryList countries={countries} handleCountries={handleCountries} />
//         <StateList states={states} handleState={handleState} />
//         <CityList cities={cities} />
//       </div>
//     </div>
//   );
// };

// export default Page;

