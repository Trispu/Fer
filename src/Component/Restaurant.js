import "./App.css";
import { packageData } from "../Shared/listOfPackages";
import { useEffect, useState } from "react";
import React from "react";

export default function Restaurant() {
  const [packages, setPackage] = useState([]);
  const [api, setApi] = useState([]);
  const getApi = () => {
    fetch("https://65d85398c96fbb24c1bb413d.mockapi.io/hihi", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((api) => {
        setApi(api);
        console.log(api);
        return api;
      })

      .catch((error) => {
        // handle error
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="container">
      <div className="All-Packages">
        {api.map((packages, index) => (
          <div className="Package" key={index}>
            <img src={packages.img} />
            <div className="data">
              <h3>{packages.name}</h3>
              <p>Host:{packages.Host}</p>
              <p>Price:{packages.Price}</p>
              <p>
                <button
                  onClick={() => {
                    setPackage(packages);
                  }}
                >
                  <a href="#popup1" id="openPopUp">
                    Detail
                  </a>
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={packages.img} />
          <h2>{packages.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <p>{packages.Host}</p>
            <p>
              <p>{packages.Price}</p>
            </p>
            <p>{packages.infor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
