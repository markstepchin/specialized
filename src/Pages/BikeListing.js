import React from "react";
import bikeHeroImage from "../Assets/Images/Bikes/BikesHero.jpg";
import bikeData from "./BikeData";

const BikeListing = () => (
  <div id='listing-container'>
    <div id='hero-img'>
      <img src={bikeHeroImage} alt='bike cover'/>
      <span id='hero-text'>Bikes</span>
    </div>
    <div id='description'>
      <p>Perfection. It's hard to define, yet easy to recognize. We specialize in the science of perfection, however, and every road bike we make embodies it. No matter your motivation or discipline, you'll benefit from our attention to detail and innovative spirit. So whether you're getting dirty on cyclocross bikes, leaving it all on the road, or testing your limits in a triathlon, you can rest assured that the bike underneath you is simply the best.</p>
    </div>
    {bikeData.map(bd => 
      <ListSection 
        key={bd.id}
        title={bd.title}
        items={bd.items} />)}
  </div>
);

export const ListSection = ({ title, items }) => (
  <div className='list-container'>
    <h2>{title}</h2>
    <div className='list-section'>
      {items.map(item => (
        <ItemCard item={item} />
      ))}
    </div>
  </div>
);

export const ItemCard = ({ item: { name, price, image } }) => (
  <div className='item-card'>
    <img src={image} alt='bike'/>
    <h3>{name}</h3>
    <p>${price}</p>
  </div>
)

export default BikeListing;
