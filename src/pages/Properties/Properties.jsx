import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.scss";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
function Properties() {
  const {data, isError, isLoading} = useProperties();
  // if error happens, show error message
  if (isError) {
    return <div className="wrapper">
      <span>Error while loading data</span>
    </div>;
  }
  // if loading, show spinner until data is loaded
  if (isLoading) {
    return <div className="wrapper flexCenter" style={{height: "60vh"}}>
      <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" />
    </div>;
  }

  // data loaded correctly
  return <div className="wrapper">
    <div className="flexColCenter paddings innerWidth properties-container">
      <SearchBar />

      <div className="paddings flexCenter properties">
        {data.map((card, i)=> (<PropertyCard key={i} property={card}/>))}
      </div>
    </div>
  </div>;
}

export default Properties;
