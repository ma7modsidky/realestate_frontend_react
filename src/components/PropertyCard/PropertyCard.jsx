import React from "react";
import "./PropertyCard.scss"
import {AiFillHeart} from "react-icons/ai"
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
function PropertyCard({property}) {
  const navigate = useNavigate()
  return (
    <div className="r-card flexColStart" onClick={()=> navigate(`../properties/${property.id}`)}>
      <img src={property.image} alt="residency card image" />
      <AiFillHeart size={24} color="white"/>
      <span className="secondaryText r-price">
        <span className="orangeText">$</span>
        <span>{property.price}</span>
      </span>

      <span className="primaryText">{truncate(property.title, {length: 25})}</span>
      <span className="secondaryText">{truncate(property.description, {length: 80})}</span>
    </div>
  );
}

export default PropertyCard;
