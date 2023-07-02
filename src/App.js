import { React, useState, useEffect } from "react";

import { Header } from "./Component/header";
import { Result } from "./Component/result";
import "./index.css";
export const App = () => {
  const [searchValue, setsearchValue] = useState({
    valueInput: "",
  });
  const [search, setsearch] = useState(false);
  const [apidata, setapiData] = useState([]);
  const api = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDt2UZ64eFW_bF824j2N35vIoWymFbKpFs&cx=735bff06587d84d52&q=${searchValue.valueInput}&start=1&num=10`;
  ////////HANDLING SEARCH BUTTON
  const handlesubmitbtn = () => {
    setsearch((prevsetsearch) => !prevsetsearch);
  };

  //////HANDLING INPUT
  const handleInput = (event) => {
    setsearchValue((prevsearchValue) => {
      return { ...prevsearchValue, valueInput: event.target.value };
    });
  };

  /////sEARCH FUNCTION
  useEffect(() => {
    if (searchValue.valueInput) {
      async function fetchApi() {
        try {
          const result = await fetch(api);
          const resolved = await result.json();
          setapiData(resolved.items);
        } catch (error) {
          alert("Try again");
        }
      }
      fetchApi();
    }
  }, [search]);
  const revealResult = apidata.map((allapiData) => {
    return (
        <Result 
        key={allapiData.link}
         {...allapiData}
          />
    )
  });

  return (
    <>
      <Header onchange={handleInput} onclick={handlesubmitbtn} />
      {revealResult}
    </>
  );
};
