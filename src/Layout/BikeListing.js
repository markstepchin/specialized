import React from "react";

const BikeListing = ({ data, title, description, children }) => (
  <div id='listing-container'>
    <div id='hero-img'>
      {children}
      <span id='hero-text'>{title}</span>
    </div>
    <div id='description'>
      {description && <p>{description}</p>}
    </div>
    {data.map(bd => 
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
