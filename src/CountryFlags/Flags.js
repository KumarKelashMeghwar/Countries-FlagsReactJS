import React, { useEffect, useState } from "react";
import "./Flag.css";

const Flags = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    const res = await response.json();
    const recievedData = res.data;
    setCountries(recievedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Countries and their flags</h2>
        <table>
          <tr>
            <th>Country</th>
            <th>Flag</th>
          </tr>

          {countries.map((value, index) => {
            if (index === 0)
              return (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>
                    <img
                      src="https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg"
                      alt="flag"
                    />
                  </td>
                </tr>
              );
            return (
              <tr key={index}>
                <td>{value.name}</td>
                <td>
                  <img src={value.flag} alt="flag" />
                </td>
              </tr>
            );
          })}
        </table>

        <footer>
          <h2>
            Designed and Developed by{" "}
            <a href="https://www.github.com/KumarKelashMeghwar" target="_blank">
              Kumar Kelash
            </a>{" "}
            with ❤️
          </h2>
        </footer>
      </div>
    </>
  );
};

export default Flags;
