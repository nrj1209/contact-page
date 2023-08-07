import React, { useState } from "react";
import "./Navpage.css";
import Dropdown from "./Dropdown";

const Component5 = () => {
  const [ourCompaniesOptions, setOurCompaniesOptions] = useState([
    "Profit",
    "Non-profit",
  ]);

  const [aboutUsOptions, setAboutUsOptions] = useState([
    "Mission",
    "Values",
    "Story",
    "Team",
  ]);

  const [contactUsOptions, setContactUsOptions] = useState([
    "Email",
    "Phone",
    "Address",
  ]);

  const [image, setImage] = useState(null);

  return (
    <div className="nav-page">
      <div className="inner-container">
        <div className="dropdown-container">
          <Dropdown
            title="Our Companies"
            options={ourCompaniesOptions}
            setImage={setImage}
          />
          <Dropdown
            title="About Us"
            options={aboutUsOptions}
            setImage={setImage}
          />
          <Dropdown title="Contact Us" options={[]} setImage={setImage} />
        </div>
        <div className="image-container-1">
          {image && <img className="dropdown-image" src={image} />}
        </div>
      </div>
    </div>
  );
};
export default Component5;
