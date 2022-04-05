import React, { useState } from "react";
import list from "../data";
import Card from "./Card";


const Products = ({handleClick}) => {




  return (
    <section className="products">
      
     
      
      {list.map((item) => (
        <Card key={item.id} handleClick={handleClick} item={item}/>
      ))}
    </section>
  );
};

export default Products;