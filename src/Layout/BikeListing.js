import React from "react";
import { Link } from "react-router-dom"; 

const BikeListing = ({ data, title, description, children }) => (
  <div id='listing-container'>
    {children}
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
        <ItemCard item={item} key={item.id}/>
      ))}
    </div>
  </div>
);

export const ItemCard = ({ item: { id, image, details: { name, price } } }) => (
  <Link className='item-card' to={`shop/${id}`}>
    <img src={image} alt='bike'/>
    <h3>{name}</h3>
    <p>${price}</p>
  </Link>
)

export default BikeListing;
