import React from "react";
import { HiLocationMarker } from "react-icons/hi";
function SearchBar() {
  return (
    <div className="search-bar flexCenter">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input type="text" name="" id="" />
      <button className="button">Search</button>
    </div>
  );
}

export default SearchBar;
